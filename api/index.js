import express from "express";
import { MongoClient, ObjectID } from "mongodb";
import assert from "assert";
import config from "../config";

let mdb;
MongoClient.connect(
  config.mongodbUri,
  (err, database) => {
    assert.equal(null, err);
    mdb = database.db("test"); // reference db name
  }
);

const router = express.Router();

router.get("/contests", (req, res) => {
  let contests = {};
  mdb
    .collection("contests") // refrence collection name
    .find({})
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1,
    })
    .each((err, contest) => {
      assert.equal(null, err);

      if (!contest) {
        res.send({ contests });
        return;
      }

      contests[contest._id] = contest;
    });
});

router.get("/names/:nameIds", (req, res) => {
  const nameIds = req.params.nameIds.split(",").map(ObjectID);
  let names = {};
  mdb
    .collection("names") // refrence collection name
    .find({ _id: { $in: nameIds } })
    .each((err, name) => {
      assert.equal(null, err);

      if (!name) {
        res.send({ names });
        return;
      }

      names[name._id] = name;
    });
});

router.get("/contests/:contestId", (req, res) => {
  mdb
    .collection("contests")
    .findOne({ _id: ObjectID(req.params.contestId) })
    .then((contest) => res.send(contest))
    .catch((err) => {
      console.error(err);
      res.status(404).send("bad request");
    });
});

router.post("/names", (req, res) => {
  console.log(req.body);

  const contestId = ObjectID(req.body.contestId);
  const name = req.body.newName;
  //validation
  mdb
    .collection("names")
    .insertOne({ name })
    .then((result) => {
      mdb
        .collection("contests")
        .findOneAndUpdate(
          { _id: contestId },
          { $push: { nameIds: result.insertedId } },
          { returnNewDocument: true }
        )
        .then((doc) => {
          res.send({
            updatedContest: doc.value,
            newName: { _id: result.insertedId, name },
          });
        })
        .catch((err) => {
          console.error(err);
        });
    });
});

export default router;
