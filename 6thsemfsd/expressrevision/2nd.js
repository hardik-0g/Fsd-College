//install body parser and modify the express application to handle POST requests at
//- the route/submit that accepts JSON data and responds with received data

const express = require("express");
const app = express();

// read form data
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  res.send("Received: " + JSON.stringify(req.body));
});

app.listen(3000, () => console.log("Server running on port 3000"));
