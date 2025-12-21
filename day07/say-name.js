// some code here
// ***
// **
// *

function sayName() {
  var name = "someName";
  console.log("the name is, ", name);
}
sayName();

var name = "tom";

function sayName() {
  console.log(this.name);
}

var name1 = "Tom";

function tom() {
  console.log(this.name + " Runs");
}

// Invoke the function tom()

tom();
