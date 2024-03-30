"use strict";
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAge({
    age: 10,
    name: "aditya",
}, {
    name: "koushik",
    age: 278,
});
console.log(age);
