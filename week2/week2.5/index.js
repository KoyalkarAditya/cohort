const express = require("express");
const app = express();
let users = [
  {
    name: "John",
    kidney: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  let johnKidneys = users[0].kidney;
  let noOfkidney = johnKidneys.length;
  let noOfhealthyKidneys = 0;
  johnKidneys.map((kidney) => {
    if (kidney.healthy) {
      noOfhealthyKidneys += 1;
    }
  });
  let noOfUnhealthyKidneys = noOfkidney - noOfhealthyKidneys;
  res.json({
    noOfkidneys: noOfkidney,
    noOfhealthyKidneys: noOfhealthyKidneys,
    noOfUnhealthyKidneys: noOfUnhealthyKidneys,
  });

});
app.post("/", (req, res) => {
  let isHealthy = req.body.isHealthy;
  users[0].kidney.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidney.length; i++) {
    users[0].kidney[i].healthy = true;
  }
  res.json({});
});
app.delete("/", (req, res) => {
  if (hasAtleastOneUnhealthyKidney()) {
    users[0].kidney = users[0].kidney.filter((kidney) => kidney.healthy);
    res.json({ msg: "Done!" });
  } else {
    res.status(411).json({
      msg: "U have no unhealthy kidneys",
    });
  }
});
function hasAtleastOneUnhealthyKidney() {
  let atLeastOneUnHealthyKidney = false;
  for (let i = 0; i < users[0].kidney.length; i++) {
    if (!users[0].kidney[i].healthy) {
      atLeastOneUnHealthyKidney = true;
      break;
    }
  }
  return atLeastOneUnHealthyKidney;
}
app.listen(3000);
