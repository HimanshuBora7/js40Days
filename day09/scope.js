console.log("day 10");

// Four types of scope in js
// 1.global scope
// 2.Function scope
// 3. Block scope
// 4. Module scope

// global scope]
// variables declared outside of any function or block scope
// are in the global scope

// somehting declared with var in global scope becomes property to the window object

var name2 = " simons";
// for windows.name2 in console
// simons would be the output
let name1 = "bob";

function greeting() {
  console.log("hello ", name1);
}

greeting();

console.log(name1);

// functional scope
// a variable declared inside the function is accessible inside the scope of that function only
//we are trying to access the variable outside of function where it is declared then we get reference error

// block scope : variables declared using let and const inside {}, can not be accessed outside the block
// but if the variable is declared with var then it can be accessed outside of block
{
  let x = 10;
  console.log(x);
}
// console.log(x);
// this produces error

{
  var y = 20;
  console.log(y);
}
console.log(y);
// this doesn't generate any error why ?
// var is always functional scope,let and const are blocked scope
// if the variable is declared using var inside a function only then it can not be accessed outside the scope of the function
//scope chain ~ it starts where the variable is accessed and goes up by one 1 level everytime to find the variable's value till the global scope

let globalvar = " i am a global variable ";

function outer() {
  let outervar = "i m a outer variable";

  function inner() {
    let innervar = "i m a inner variable";

    console.log(innervar);
    console.log(outervar);
    console.log(globalvar);
  }
  inner();
}
outer();

// console.log(outervar); //reference error as this variable will be searched in global scope

var count = 10;

function outer1() {
  var count = 20;

  function inner1() {
    var count = 30;
    console.log(count);
  }
  inner1();
  console.log(count);
}

outer1();
console.log(count);
