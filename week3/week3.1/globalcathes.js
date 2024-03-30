const express = require("express");
const app = express();
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneysLength = kidneys.length;

  res.send("you have " + kidneysLength + " kidneys");
});
app.use((err, req, res, next) => {
  //global catches are defined after all the routes with four agrs err,re,res,next whenever there is an error occur control reaches here
  // which  usually blocks the user from seeing database and give user  better error message
  res.status(404).json({
    msg: "sorry something up with the server",
  });
});
app.listen(3000, () => {
  console.log("Listening at port 3000");
});
