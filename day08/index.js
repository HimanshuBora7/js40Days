// Hoisting and temporal dead zone
// hoisting in english means pulling somethin up
//

console.log("name is", name);
var name;
name = "tom";
console.log("name is ", name);

// diffn between var and let
// how let solves this problem ?
// when we use a variable with let then it is assigned nothing in contrast to var where it was getting assigned as undefined in the creation phase

//temporal dead zone
// an area or block in your code where you can not access a variable untill it is initialized

// if you try to access a variable inside a tdz b4 initializing it then it gives ReferenceError

// {
//   // === name variable's tdz started here
//   //
//   //
//   console.log(name);
//   //
//   //
//   //
//   //
//   let name = "bochie"; // here the value has initialized so the names variable tdz ends here
// }

//function hoisting

// invoke a function, chase()
chase();

//declare a function, chase()
function chase() {
  console.log("tom chase jerry");

  //invoke a function , caught();
  caught();
}

//declare a function, caught()

function caught() {
  console.log("tom caught jerry ");
}

// hoisting means creating the memory for your function or variable
// function hoisting ~ creating memory for function and doing basic initialization
