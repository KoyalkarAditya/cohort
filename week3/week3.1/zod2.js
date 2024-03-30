const express = require("express");
const app = express();
app.use(express.json());
const zod = require("zod"); //npm i zod

const schema1 = zod.array(zod.number);
const schema2 = zod.object({
  email: zod.string().email(),
  password: zod.string(),
  country: zod.literal("ID").or(zod.literal("US")),
});

app.post("/health-checkup", (req, res) => {
  //const kidneys = req.body.kidneys;
  const email = req.body.email;
  //const response = schema1.safeParse(kidneys);
  const response2 = schema2.safeParse(email);
  /*
  response looks like if we send whole response as  
  res.send({
    response,
  });
  "response":{"success":false,"error":{"issues":[{"code":"invalid_type","expected":"array","received":"undefined","path":[],"message":"Required"}],"name":"ZodError"}}}
  */
  if (!response2.success) {
    res.send({
      msg: "something went wrong",
    });
    return;
  }
  res.send("u are kidneys are safe");
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
