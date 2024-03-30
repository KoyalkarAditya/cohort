const express = require("express");
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  const n = req.query.n;
  let ans = calculateSum(n);
  res.send("answer is :" + ans.toString());
});
app.listen(port);
app.get("/sum", (req, res) => {
  ///sum?a=10&b=20
  const a = req.query.a;
  const b = req.query.b;
  let sum = parseInt(a) + parseInt(b);
  res.send("sum=" + sum.toString());
});
