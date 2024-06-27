//for one user data information we use object

//Simple object 

let person = {
    name :"sakeena majeed",
    age : 16,
    gender : "female",
};

console.log(`Hy my name is ${person.name} and my age is ${person.age}.
and my gender is ${person.gender}.`);



//object with data types

let user1 :  {
    name : string,
    age : number
    role : string
}
= {
    name : "manahil",
    age : 16 ,
    role : "student"
}

console.log(`and  my second name is ${user1.name} and my age is ${user1.age},
and my role is ${user1.role}`);

 //Type  Alias
type Father = {
    name : string,
    age  : number,
    role : string

    //Nested objects
    Children ?:{         //"?"  show optional
        name : string,
        age  : number,
        class: number,
    },
};

let fatherdetail : Father = {
    name :"Abdul majeed",
    age  : 40 ,
    role :"father",
    Children:{
        name :"mariyam",
        age  : 7,
        class: 4,
    },
};
console.log(`My father name is ${fatherdetail.name}, and his age is ${fatherdetail.age},
and his role is ${fatherdetail.role}. And children name  ${fatherdetail.Children?.name},
age ${fatherdetail.Children?.age} and read in class ${fatherdetail.Children?.class}`);

//Type literals

let trafficlight : "Red" | "Green" | "yellow" = "Green";  //pipe sign called union,
                                                         //used to store multiple data type


let age :string|number = 16;

console.log(`${trafficlight} AND ${16}`);

//Intersection => combine two data types and its symbol is "&"

type student ={
    name  : string,
    age : number,
    rollNo: number,

};
type teacher ={
    name  : string,
    age : number,
    experiance: string

};


let student1 : student ={
    name  : "Sakeena Majeed",
    age   : 16,
    rollNo: 1234,
};


let teacher1 : teacher ={
    name :"Hamza Syed",
    age  : 23,
    experiance:"Two Years"
};

let both1 : student & teacher ={
    name  : "Hamzah", //"name" is a common property because its use one time in intersection "&" 
    age   : 23,           //"age" is  a common property because its use one time in intersection "&" 
    rollNo: 2213,
    experiance: "Two Year",
};
console.log(`My sir name is ${both1.name}, and your age is ${both1.age},
and your rollnumber is ${both1.rollNo},ans  and your experance is ${both1.experiance}.`);































let name1 : string = " Alishba";
if(a<= 10)