const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
app.use(express.json());

function readContentFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "files", "a.txt"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
}
app.get("/", (req, res) => {
  res.json({
    msg: "file content reader",
  });
});
readContentFromFile()
  .then((data) => {
    app.post("/", (req, res) => {
      res.send(data);
    });
  })
  .catch((err) => {
    app.post("/", (re, res) => {
      res.json({
        msg: "something went wrong",
      });
    });
  });

app.listen(3000, () => {
  console.log("listening at port 3000");
});
