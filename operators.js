// Arithmetic
let x=2;
let y=3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y); // Exponential (x to the power of y)

//Increment (++)
console.log(++x);
console.log(x);
//Decrement (--)
console.log(--y);
console.log(y);
// assignment 
x = 5;

x = x+5;
x += 5;

x = x-5;
x -= 5;

// comparison 

x = 1;

console.log(x<1);
console.log(x<=1);
console.log(x>=1);
console.log(x>1);

//Equality 

console.log(x===1);
console.log(x!==1);

console.log(1 === 1); //true=> strict equality ( type + value)
console.log('1'===1) //false
console.log('1' == 1); // true lose equality (type)

//Ternary operator
// customer more than 100 points are gold otherwise silver
let points = 110;
let type = points >100 ? 'gold' :'silver'

console.log(type);
// logical 
//And  (&&) => if both the operators are true returns true

console.log(true && true); //true
console.log( false && true);//false

// let goodScore = true;
// let highIncome = true;
// let eligibilityForLoan = goodScore && highIncome;

// console.log(eligibilityForLoan); //true

// logical OR(||) => if one of the operands is true returns true
// let goodScore = true;
// let highIncome = false;
// let eligibilityForLoan = goodScore || highIncome;

// console.log(eligibilityForLoan); //true

//logical not (!)

let goodScore = false;
let highIncome = false;
let eligibilityForLoan = goodScore && highIncome;

console.log(eligibilityForLoan); //false

let applicationRefused = !eligibilityForLoan
console.log(applicationRefused); //true

// bitwise OR(|)

console.log(1|2);
console.log(2&2);

//operator precedence

x=2+4*5;//22

x= (2+4)*5//30
 
