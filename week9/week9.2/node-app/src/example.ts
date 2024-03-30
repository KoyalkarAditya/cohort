interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
type Person2 = {
  name: string;
  age: number;
  // same as interface but we cannot be implement
};
type PropOne = {
  name: string;
  age: number;
};
type PropTwo = {
  name: string;
  DOB: Date;
};
type combinedProp = PropOne & PropTwo;

const person: combinedProp = {
  name: "aditya",
  age: 20,
  DOB: new Date(),
};

type greetArgs = number | string;
class Employee implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}
const aditya = new Employee("aditya", 20);
aditya.greet("Hello");

interface one {
  name: string;
}
interface two extends one {
  age: number;
}

function doSomeThing(func: (args: string) => string): string {
  const str = func("hello");
  return str;
}
