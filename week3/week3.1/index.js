const express = require("express");
const app = express();
app.use(express.json());
const zod = require("zod"); //npm i zod

function validateObjectofemailPassword(req, res, next) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(req.body);
  if (!response.success) {
    res.send("invalid email and password");
    return;
  }
  // console.log(response);
  next();
}
app.post("/login", validateObjectofemailPassword, (req, res) => {
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
