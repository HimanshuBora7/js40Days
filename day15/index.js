console.log("day15: Arrays ");

// [] arrays in js, can be collection of any type

const mixedArray = [100, true, "bob", {}];

//indexing starts at index zero
//index ends at length-1

const salad = ["x", "y", "z"];

//creating array using array constructor function

// as we know constructor function's name start with capital letter

function Car(model) {
  this.model = model;
}

const bmwCar = new Car("bmw");

console.log(bmwCar);

const anotherArray = new Array("x", "y", "z");
console.log(anotherArray);

const two = new Array(2);
// this creates empty array  with 2 empty slots

//push ()  ~ adds elemenets to the end
const ret = salad.push("lol");
console.log(ret);
// the push method returns the total count of element in an array after pushing that element
console.log(salad);
// push method change the source array, it chnages the source array to insert new element

//unshift ~ inserts elements at the start of the array

const retVal = salad.unshift("first");
console.log(retVal); // similar to push method it returns the size of array after insertion
console.log(salad);

//pop method ~ removes an element from the end of the Array
const removed = salad.pop();
console.log(removed);

// shift ~ removes an element from the front of the array
