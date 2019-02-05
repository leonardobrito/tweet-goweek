const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

/**
 * Database setup
 */

mongoose.connect("mongodb://xxx:xxx@xxx.mlab.com:49207/xxx-xxx", {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(require("./routes"));

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
