// proide the steps to create basic express application that respond eith hello express! on the root route(/)

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
