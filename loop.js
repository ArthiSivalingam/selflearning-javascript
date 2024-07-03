//if statement

// if(condition){
//     statement
// }
// if else statement

// if (condition) {
//     statement
// }
// else if (anotherstatement) {
//     statement
// }
// else if (yetanotherstatement) {
//     statement
// }
// else{
//     statement
// }

//Example 
// let hour = 22;

// if (hour >= 6 && hour < 12)
//     console.log("Good Morning");
// else if (hour >= 12 && hour < 18)
//     console.log("Good Afternoon");
// else
//     console.log("Good evening");

//Switch case
// let role= 'guest';

// switch (role) {
//     case 'guest':
//         console.log('guest user');
//         break;
//     case 'moderator':
//         console.log('moderator user');
//         break;
//     default:
//         console.log('unknown user');
// }

//For loop
//for(initaialisation;condition;increment expression)
// i acts like index and its a loop variable 
// for(let i=0;i<5;i++){
//     console.log('hello world');
// }
// //to find odd num 
// for(let i =1 ; i<=10 ; i++){
//     if(i%2 !== 0)
//         console.log(i);
// }
// //reverse
// for(let i =10;i>=1;i--){
//     if(i%2 !== 0)
//     console.log(i);
// }

//while loop

//initalitalion
//while(condition){
// increment
// }
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0)       
//     i++;
//     console.log(i);
// }
//do while 

// let i = 0;
// do {
//     if (i % 2 !== 0)
//         i++;
//     console.log(i);
// } while(i <= 5); // do statement get execute atleast once even it is false
//infinite loop
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0)       
// i++; // if we omit this it will run infinitly it is applicable for do while , for loops as well
//     console.log(i);
// }

// For-in // used to iterate over the property of the object.

// const person ={
//     name : 'Arthi',
//     age:29
// };
// for (let key in person)
//     console.log(key,person[key]);
//     console.log(key,person[key]);


//for-in in array 

// const colors = ['red','blue','green'];
// for(let index in colors)
//     console.log(index, colors[index]);

//for-of 
// const colors = ['red','blue','green'];
// for(let index of colors)
//     console.log(colors);

// Break and Continue
// let i = 0;
// while (i <= 10) {
//     if( i === 5) break; // jumps out of the loop
//     if (i % 2 !== 0)       
//     i++;
// continue; // jumps to the next iteration
//     console.log(i);
// }

//Excersise

// function isLandscape(width,height){
//   return (width>height); // no need of conditional operator (width > height ? true : false)
//   }
//   console.log(isLandscape(100,80));

const output =fizzBuzz(30);
console.log(output);
function fizzBuzz(i) {
    if (typeof i !== 'number')
        return 'Not a number';
    if ((i % 3 === 0) && (i % 5 === 0))
        return 'FizzBuzz';
    if (i % 3 === 0)
        return 'Fizz';
    if (i % 5 === 0)
        return 'Buzz';
    return i;
}