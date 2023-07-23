const express = require("express");
const app = express();
const port = 3000;


app.use(express.static(__dirname + '/public/build'));


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });