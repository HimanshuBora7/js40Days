console.log("Inside global execution context");
var a = 6;
function testMe() {
  console.log("Inside testMe execution context ");
  var b = 10;
  var user = {
    name: "Bob",
    country: "Nepal",
  };
  function testAgain() {
    console.log("Inside testAgain Execution Context");
    console.log("exiting testAgain Execution Context");
  }
  testAgain();
  console.log("exiting testMe execution context");
}
testMe();
console.log("exiting global execution context");
