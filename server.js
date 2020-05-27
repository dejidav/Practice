import config from "./config.js";
import express from "express";
import apiRouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from "path";

import serverRender from "./serverRender";

const server = express();
server.set("view engine", "ejs"); //set template engine
//use sass style
server.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
  })
);

//renders node application/pages/data etc
server.get(["/", '/contests/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render("index", {
        initialMarkup,
        initialData,
      });
    })
    .catch();
});

server.use("/api", apiRouter); // renders api requests
server.use(express.static("public")); //renders public files

server.listen(config.port, config.host, () => {
  console.info("Express is listening on port ", config.port);
});
