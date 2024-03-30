const doSomething = (a: string, b: string) => (c: string) => {
  console.log(a + b);
};

doSomething("aditya", "tinku");
``;

let x: number = 1;

console.log(x);

function Greet(x: string) {
  console.log("Hello " + x);
}
Greet("Aditya");

function Sum(a: number, b: number): number {
  return a + b;
}
let a = Sum(5, 10);
console.log(a);
let num: any = 10;
num = "aditya";
console.log(num);
function isAdult(age: number): boolean {
  if (age < 18) {
    return false;
  }
  return true;
}
console.log(isAdult(19));

function RandomFunction(func: () => void) {
  setTimeout(func, 2000);
}
RandomFunction(() => Greet("Aditya"));
function HelloWorld() {
  console.log("hello world");
}
RandomFunction(HelloWorld);
