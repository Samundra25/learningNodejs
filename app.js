const express = require("express"); //requiring express package
const app = express(); //storing it in app, app variable throughout project ma use garxam

app.get("/", (req, res) => {
  res.send("Hello welcome to Nepal");
});

app.listen(3000, function () {
  console.log("NodeJS has started on port 3000");
});

// node --watch app.js
