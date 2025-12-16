console.log("day 4");

// control flow in js
// if
// if-else
// switch case
// break
// continue
//
// if (condition) {

// } else {

// }

let caught_bus = false;

if (caught_bus) {
  console.log("you will be reaching on time ");
} else {
  console.log("you will be late ");
}

//if vs else if
// if use if, all the conditions will be checked
// is we are using if else, then other conditon statement are not checked if one of them is met

// for multiple conditions based on single value if -else is not feasible we use switch case

let position = 4;

switch (position) {
  case 1:
    console.log("print 1");
    break;
  case 2:
    console.log("print 2");
    break;
  case 3:
    console.log("print 3");
    break;
  case 4:
    console.log("print 4");
    break;
}
let name1 = "tejas";

switch (name1) {
  case "google":
    console.log("google was entered");
    break;
  case "tejas":
    console.log("delyed");
    break;

  default:
    console.log("nothing was entered");
}
// ternary operator ? :
// if we have single if else
