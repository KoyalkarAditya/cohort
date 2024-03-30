interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phoneNo?: number;
  // if we write ? it is an optional property
}
const user = {
  firstName: "koyalkar",
  lastName: "aditya",
  email: "koyalkaraditya@gmail.com",
  age: 20,
};
function isLegal(user: User): boolean {
  if (user.age < 18) {
    return false;
  }
  return true;
}
console.log(isLegal(user));

//code repeatation
// function isLegal(user: {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
// }): boolean {
//   if (user.age < 18) {
//     return false;
//   }
//   return true;
// }
