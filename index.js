const express = require("express");

const myApp = express();

myApp.get("/", (req, res) => res.send("Hello Express"));
myApp.get("/cust", (req, res) => {
  console.log(req.method, req.url);

  res.send("Customer requested");
});
myApp.listen("10000");
