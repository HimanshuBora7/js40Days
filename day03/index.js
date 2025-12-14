console.log("day 03");
let x = 4 + 6;
// console.log(x);
//operators

// Arithmetic
// assignment
// comparison
// Relational
// logical
// Bitwise
// conditional

//arithmetic operator
let a = 10;
let b = 22;

console.log(a + b);
console.log(a - b);

// what if there are string stored in variables and we are using arithmetic operator with them
let f_name = "bob";
let m_name = " the ";
let l_name = "builder";

console.log(f_name + m_name + l_name);
// we should not use + operator for the purpose of concatination
console.log(a + f_name + b);

// exponential operator  usingg two ** sign
let m = 2;
let n = 3;
console.log(m ** n);
// remainder operator % modulo

// post increment operator = value is assigned first, then it is incrementedor decremented

// pre increment operator = value is incremented or decremented first then it is assigned

let count = 5;
console.log("--Post increment-- ");

console.log("Value of count before post increment %d", count);

console.log("value of post increment ", count++);

console.log("Value of count after post increment %d  ", count);

console.log("--Pre increment-- ");

console.log("Value of count before pre increment %d  ", count);

console.log("value of pre increment ", ++count);
console.log("Value of count after pre increment %d  ", count);

//assignement operator
console.log("**** Assignment operator *** ");

let x1 = 10;
x1 += 5; //shorthand operator
console.log(x1);

//comaprion operators ( > , < . >= , <= )

console.log("**** comparator operator *** ");
// two types of equal operator
// //a) strict equal operator
// //b) loosly equal operator
// (same logic goes with not equal operator )

console.log(4 == 6);
console.log(0 == false); // ideally the output should not be there as we comparing to two different data types
// so == is loosly equality  operator
// this loosly eqaulity opeator automatically converts or coerced the differnt data tyes operands to nearest possible similar data type

console.log(3 == "3"); // ideally this should not generate the output as one side is integer and the other side is string

// so we use strict equality, instead of two equal we use three equal

// it check if both the side of the equality operator, the operands are of similar data type or not
// if they are not of similar data types then it does not evaluate it

console.log(3 === "3");
// if the operands are of different data types the strict equality operator straight away gives false
// if both the operands are null or undefine it will return true

console.log(null === null);

//undefined values ~ declared but no value is assigned

let x4;
let x5;
console.log(x4 === x5);

// NaN == not a number ~ if something is not qualifies as number by js engine then it is NaN
// if any side of the operator is Nan, it is always returned as False

console.log(NaN == null); //false

// equating two objects(key - value pair, non primitive data type) using strict equality operator

let obj1 = { name: "bob" };
let obj2 = { name: "bob" };

console.log(obj1 === obj2); // false ~ ebcause obj1 and obj2 are both of object data type and which is non primitive data types and the non primitive data types are pass by reference so the obj1 and obj2 are holding reference values or the memory address~ the address to the location where actual values in the object are stored in heap

//using not equal operator in strict way
// !==

console.log(4 !== "four"); //true

// other equality operator ~ > , < , >= ,<=
// comparison operatrs return boolean values

// logical operators ~ typically used with boolean values
console.log("**** Logical operators *****");

// && || ??(Nullish Coalescing Operator) !
