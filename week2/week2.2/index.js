const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Apply body-parser middleware before defining routes
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello there!</h1>");
});

app.post("/backend", (req, res) => {
  let question = req.body.message;
  console.log(question);
  let output;
  output = "2 + 2 = 4";
  res.json({
    output: output,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
