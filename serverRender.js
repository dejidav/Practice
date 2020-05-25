import axios from "axios";
import config from "./config";
import ReactDOMServer from "react-dom/server";
import App from "./src/components/App";
import React from "react";

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`).then((resp) => {
    return ReactDOMServer.renderToString(
      <App initialContests={resp.data.contests} />
    );
  });
// renderToString not rendering desired output
export default serverRender;

//Note-to-self: figure out why ReactDOMServer not rendering React HTML markup 
// test with curl http://localhost:8080