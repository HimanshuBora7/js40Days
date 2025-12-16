// loops ~ repeating the code
// three types of primary loop
// for loop ~ for fixed number of iteration
// while loop ~ when we don't know how many times we have to loop, we want to loop till a certain condition is true
// do while ~ atleast one execution

let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i));
}

// break and continue

// continue ~ skips the particular iteration

// print odd numbers using continue

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

// multiple counters
// we can use multiple variable in single loop

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}
// printing a star tree pattern
/*

* 
* *
* * *
* * * * 
* * * * *

*/

for (let i = 0; i < 6; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}

// while loop ~ runs as long as condition is met
// do while ~ minimum one execution
// do {
//   code
//  } while(condition)
