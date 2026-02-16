//install cookie parser and odify the express application to set a cookie named user with the value hardik and retrieve it in another route


// note:- http://localhost:3000/set-cookie
// Then open:- http://localhost:3000/get-cookie
// What will happen
// set-cookie → cookie saved in browser
// get-cookie → server reads & prints it
// Output:- Cookie value: Hardik



const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  res.cookie("user", "Hardik");
  res.send("Cookie set");
});

app.get("/get-cookie", (req, res) => {
  res.send("Cookie value: " + req.cookies.user);
});

app.listen(3000, () => console.log("Server running on port 3000"));
