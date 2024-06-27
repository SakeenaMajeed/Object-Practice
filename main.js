"use strict";
//for one user data information we use object
var _a, _b, _c;
//Simple object 
let person = {
    name: "sakeena majeed",
    age: 16,
    gender: "female",
};
console.log(`Hy my name is ${person.name} and my age is ${person.age}.
and my gender is ${person.gender}.`);
//object with data types
let user1 = {
    name: "manahil",
    age: 16,
    role: "student"
};
console.log(`and  my second name is ${user1.name} and my age is ${user1.age},
and my role is ${user1.role}`);
let fatherdetail = {
    name: "Abdul majeed",
    age: 40,
    role: "father",
    Children: {
        name: "mariyam",
        age: 7,
        class: 4,
    },
};
console.log(`My father name is ${fatherdetail.name}, and his age is ${fatherdetail.age},
and his role is ${fatherdetail.role}. And children name  ${(_a = fatherdetail.Children) === null || _a === void 0 ? void 0 : _a.name},
age ${(_b = fatherdetail.Children) === null || _b === void 0 ? void 0 : _b.age} and read in class ${(_c = fatherdetail.Children) === null || _c === void 0 ? void 0 : _c.class}`);
//Type literals
let trafficlight = "Green"; //pipe sign called union,
//used to store multiple data type
let age = 16;
console.log(`${trafficlight} AND ${16}`);
let student1 = {
    name: "Sakeena Majeed",
    age: 16,
    rollNo: 1234,
};
let teacher1 = {
    name: "Hamza Syed",
    age: 23,
    experiance: "Two Years"
};
let both1 = {
    name: "Hamzah", //"name" is a common property because its use one time in intersection "&" 
    age: 23, //"age" is  a common property because its use one time in intersection "&" 
    rollNo: 2213,
    experiance: "Two Year",
};
console.log(`My sir name is ${both1.name}, and your age is ${both1.age},
and your rollnumber is ${both1.rollNo},ans  and your experance is ${both1.experiance}.`);
let name1 = " Alishba";
if (a <= 10)
    ;
