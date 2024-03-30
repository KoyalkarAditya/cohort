const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://KoyalkarAditya:Koyalkaraditya123@cluster0.neturz7.mongodb.net/userappnew"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(400).json({
      msg: "user already exists",
    });
  }
  //User.delete,User.update
  const user = new User({
    name: username,
    email: email,
    password: password,
  });
  //or use user.create
  user.save();
  res.json({
    msg: "user created successfully",
  });
});
app.get("/", (req, res) => {
  res.json({
    msg: "hello",
  });
});
app.listen(3000, () => {
  console.log("listening at port 3000");
});
