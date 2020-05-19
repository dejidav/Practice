import config from "./config.js";
import express from "express";
import apiRouter from "./api";
const server = express();
server.set("view engine", "ejs");

//renders node application/pages/data etc
server.get("/", (req, res) => {
  res.render("index", {
    content: "Hello Express and EJS",
  });
});

server.use("/api", apiRouter); // renders api requests
server.use(express.static("public")); //renders public files

server.listen(config.port, () => {
  console.info("Express is listening on port ", config.port);
});
