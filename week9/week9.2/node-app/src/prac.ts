function isEligible(n: number): boolean {
  if (n < 18) {
    return false;
  }
  return true;
}
console.log(isEligible(19));
interface user {
  name: string;
  age: number;
}

const User = {
  name: "Aditya",
  age: 20,
};
function objectFunction(User: user) {
  console.log(User.name);
}

enum Direction {
  //by default 0,1,2... we can also assign a value
  up,
  down,
  left = "left",
  right = "right",
}
function doSomethingGGGG(keyPressed: Direction) {
  if (keyPressed == Direction.left) {
    //perform some action
  }
}
enum StatusCode {
  Success = 200,
  NotSuccess = 404,
  Error = 500,
}
function doSomethingGG(key: Direction) {
  console.log(key);
}

doSomethingGG(Direction.up);
