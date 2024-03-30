const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("add two numbers");
});
app.get("/add", (req, res) => {
  let a = req.query.a;
  let b = req.query.b;
  let ans = parseInt(a) + parseInt(b);
  res.send(ans.toString());
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
