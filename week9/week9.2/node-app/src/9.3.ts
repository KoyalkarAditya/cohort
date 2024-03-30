function firstEle(num: (number | string)[]): (number | string)[] {
  return num;
}
const value = firstEle(["aditya", "tinku"]);
// console.log(value[0].toUpperCase());
// typescript does not let u call toUpperCase() because it cant figure out it is number or a string \

let as = firstEle(["mums", 279]);
// it aspects combinations of data
//this can be fixed by (number[] | string[])

//these problem are solved by using generic

function identity<T>(arg: T) {
  return arg;
}
const a1 = identity<string>("string");
const a2 = identity<number>(21123);
const a22 = identity<string[]>(["hsdjhd"]);
console.log(a1.toUpperCase());
interface Userggg {
  name: string;
  age: number;
}
const obj = identity<Userggg>({
  name: "agsdh",
  age: 10,
});
