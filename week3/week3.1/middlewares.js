const express = require("express");
const app = express();
app.use(express.json());

/*function userNamePasswordValidator(username, password) {
  if (username != "aditya" || password != "aditya123") {
    return false;
  }
  return true;
}
function kidneyValidator(kidneyId) {
  if (kidneyId == 1 || kidneyId == 2) {
    return true;
  }
  return false;
}
*/
let count = 0;
function calculateLoad(req, res, next) {
  count++;
  console.log(count);
  next();
}
app.use(calculateLoad); //after this every route will automatically executes this callback functions before this routes are not effected
app.get("/", (req, res) => {
  res.json({
    msg: "welcome to week 3",
  });
});
function userMiddleware(req, res, next) {
  let username = req.headers.username;
  let password = req.headers.password; // Change from req.headers.username to req.headers.password

  if (username != "aditya" || password != "aditya123") {
    res.status(403).json({
      msg: "User doesn't exist with the given credentials",
    });
    return;
  }
  next();
}
function kidneyMiddleWare(req, res, next) {
  let kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.send("Too many kidneys, wrong input");
    return;
  }
  next();
}
app.get("/health-checkup", userMiddleware, kidneyMiddleWare, (req, res) => {
  res.send("Your kidney is fine");
});
app.listen(3000, () => {
  console.log("Listening at port 3000");
});
