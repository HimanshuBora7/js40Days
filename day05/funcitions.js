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
function outer() {
  console.log("outer function ");

  function inner() {
    console.log("inner function ");
  }
  inner();
}

// if we want to execute the inner function it has to be executed inside the outer function because its scope or existence is not beyond outer function
outer();

//if we want to execute the inner function independently we can return it from the outer function and store it in a variable and execute that variable

function outer2() {
  console.log("outer function ");

  return function inner2() {
    console.log("inner function ");
  };
}

let ret_func = outer2();

console.log(ret_func);
ret_func();

// callback function ~ a function that can be passed to another function as argument and call that function we are passing after some time based on some condition

const is_func = true;

function foo(func) {
  console.log("foo");

  // callback function are called based on some condition or buisness case or buisness logic

  if (is_func) {
    func();
    // here we have declared a function as parameter and it is getting executed here
  }
}

// here we are passing a function as argument but we have not named it anything as we are executing its body directly inside another function and we don't feel any need to call it somewhere else so it is an anonymous function

foo(function () {
  console.log("buzzzz");
});

// named function can also be passed

let hush = function () {
  console.log("hush");
};

foo(hush);

// who calls the callback func ?~ some condition, buisness logic or user case

// Pure function ~ function providing same output for same input

function greeting(name) {
  return "hello, " + name;
}

console.log(greeting("bochan"));
console.log(greeting("bochan"));
console.log(greeting("bochan"));
// for same input the output will always remains same, ao this is a pure function

//  example of impure function

const greetingMsg = "hello ";

function greeting2(name) {
  return greetingMsg + name;
}

console.log(greeting2("bochan"));
// here the output will always not remain same for same input it will change if the value of greetingMsg is changed, hence this function is impure function

// Higher Order function ~ the function which is either taking other function as an argument or parameter or returning another function is called HOF

function getCamera(camera) {
  camera();
}
// one part of HOF
getCamera(function () {
  console.log("nikon ");
});

// another part of HOF

function returnFunc() {
  return function () {
    console.log("returned from function ");
  };
}

let ret_func1 = returnFunc();
ret_func1();

// it is mostly useful when we have to create wrappers

// Arrow function ~ syntax that was introduced in modern js

// normal way of writing a function
function greetMe() {
  console.log("hello");
}

// converting this into arrow function ~ converting function to an expression

let greetMe1 = () => {
  console.log("hello from arrow function ");
};

// executing the function
greetMe1();
greetMe();

// if the body has one statement we can omit the braces

let x2 = () => console.log("hello ji ");

x2();

// parameter can be declared inside parenthesis

let x3 = (greetingMsg) => console.log(greetingMsg);

x3("hola amigo ");

// wht if we have to return somethig, if we want to return single line of code then we can omit the return keyword

let x4 = () => "holo amigos";

let ret_St = x4();
console.log(ret_St);

// how this keyword behaves differently for arrow function and why ??

// IIFE ~ (Immediatly Invoked Function Expression )

// () ~ group operator

// we want to immediately invoke a function after its creation or we want to execute a anonymous function
// wrap the function b/w two parenthesis and and that with two parenthesis ();

(function () {
  console.log("IIFE");
})();

// whenever we want something independent on page to execute itself as it is not dependent on dom tree like some plugins or a chatbot which is independent from the html and we want it to be executing as soon as js is loaded

// if we want to pass parameter to IIFE. we pass the argument in ending parenthesis ();

(function (count) {
  console.log(2 * count);
})(2);

// call stack

// recursion

function fetchWater(count) {
  console.log("fetching water");

  if (count === 0) {
    return;
  }

  fetchWater(count - 1);
}

fetchWater(5);
