const express = require("express");
const path = require("path");
const app = express();
const router = require("./router/router.js");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "../public/dist")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../public/dist/index.html"));
});

module.exports = app;
