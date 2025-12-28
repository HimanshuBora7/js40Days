// optional chaining
console.log("optional chaining");
// simplifies how can we extract properties from nested objects especially when some values of nested object can result in null or undefined

const employee = {
  salary: {
    bonus: 300,
  },
};
console.log(employee.dept); // undefined
// console.log(employee.dept.name); // error
//Cannot read properties of undefined (reading 'name')
// at Object.<anonymous> (/home/himanshu/programming_files/js40Days/day11/chaining.js:11:27

const name = employee.dept?.name;
console.log(name);
// it gives undefined instead of giving an error which crashes the program
// so optional chaining
// optional chaining freely. So this is another way of accessing the value of an
// 1:24:53
// object by making sure that you are gracefully handling the absence of a
// 1:24:58
// value whether it is undefined or could be a value which is null. So why optional chaining will be useful to you?
