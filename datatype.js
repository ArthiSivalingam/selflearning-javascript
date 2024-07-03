//primitive datatype
// String
let firstName = 'Arthi';
console.log(firstName); // string literals
// Number
let age = 29;
console.log(age); // number literals
// Boolean
let isStudied = true;
console.log(isStudied);// Boolean literals
console.log(typeof (isStudied));
// undefined
let lastName = undefined;
console.log(typeof (lastName));
// null
let data = null;
console.log(typeof (null)); // typeof => object
//reference datatype
//object literals
let person = {
    firstName: 'aArthi',
    age: 29
};

//dot notation
console.log(person.age);

//bracket notation
console.log(person['firstName']);
//array literals
// 1.Objects and size of the array are dynamic
let selectedColors = ["red", "green", "yellow"];
selectedColors[3] = 'pink'
console.log(selectedColors[2]); // array index starts with 0,1,2,3..
console.log(selectedColors.length);
//functions => Performing a task

// function greet (name){ // parameter for greet function
// console.log("Hello" + " " + name);
// }
// greet('Aju'); //argument for greet function (actual value)
// greet('siva'); // functions can have mulitple parameters 

function greet(name , lastName){ 
    console.log("Hello" + " " + name + " " + lastName);
}
greet('Aju' , 'sivalingam'); 
greet('siva' ,'palaniappan'); //lastname is seperated by comma 

//functions => calculating a number 

function square(number){
   return number*number;
}
// let number = square(2);
// square(2);
// console.log(number);
console.log(square(4));// first square of 2 gets called and pass that value to console.log (2 fun call =>
    //1. square of 2 
    //2. log() )