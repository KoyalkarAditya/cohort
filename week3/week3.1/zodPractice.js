const zod = require("zod");
function validateInput(arr) {
  const schema = zod.array(zod.number()); //array of numbers
  const response = schema.safeParse(arr); //only parse if not looking at type
  console.log(response);
}
validateInput([1, 2]); //output: {success :true ,data:[1,2]} or if error {success:false ,error:[Getter]}
function validateEmail(email) {
  const schema = zod.string().email();
  const response = schema.safeParse(email);
  console.log(response);
}
function validateObjectofemailPassword(object) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(object);
  console.log(response);
}
validateObjectofemailPassword({
  email: "koyal@gmail.com",
  password: "12345678",
});
