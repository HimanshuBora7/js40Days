//topics to be covered
/*

What is a function 
defining a function 
function as expression 
default and rest parameters
function nesting 
callback functions 
pure functions and HOF( Higher order function )
arrow function 
IIFf
call stack 
recursion 
hoisting 
scope 
closure 

*/
console.log("Day 6");

//define or declare a function

//using function keyword follwed by function name

function printThis() {
  //function body
  console.log("function is printing something");
}

//invoking the function

printThis();

// function as an expression

// what is expression ? ~ something with equal sign or assignment operator

let printMe = function () {
  console.log("print me, hello there ");
};

// to execute the expression

printMe();

console.log(printMe);

// mathematical definition of function ~ something that maps input to the output

// parameters or placeholders ~ input or varianles passed to functions while declaraing them

// arguments ~ inputs passed to functions while invoking them

// parameters are provided to functions in a comma seprated ways

function sum(a, b) {
  console.log(a + b);
}
sum(5, 10);

function ret_sum(a, b) {
  return a + b;
}
let result = ret_sum(5, 10);
console.log(result);

function double(a) {
  return 2 * a;
}
console.log(double(result));

// default paramters

function calc(a = 0, b = 0) {
  return 2 * (a + b);
}

let x = calc();
console.log(x);

// Rest parameter ~ when we don't know how many arguments we gonna get so we are confused about how many parameters to declare

function calculateThis(x, y, ...rest) {
  console.log(x, y, rest);
}
calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);

// after the parameter declared been maped to the arguments, the rest of the argument will be stored in an aarray named rest or the name u specify after three dots ...name

// rest parameter should always be used as last parameter , it can't be used as first or middle parameter

// nested function ~ function inside another function
