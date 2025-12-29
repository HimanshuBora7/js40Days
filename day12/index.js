"use strict";
console.log("day13: The `This` Keyword....");

// This is a keyword in js to help us understand what is happening in the execution context of js

// when js is loaded, global execution context is created
// in gec we get two things

// in browser we get this and window object
// in server side means in node enviornment we get this and global object

// in gec or initial execution context, this will be pointing to windows or global object

console.log("this at global level" + this); // window

// main point to understand is in what circumstances, this will be pointing towards what ?

// to understand this

// we have to look for
// objects
//functions ~ where the particular function is invoked

// inside of an object -- Implicit binding - it is a way in which u understand that if a method is called on an object using dot notation then the context of this is bound or associated to the object on which we have called the method

const employee = {
  id: 1234,
  firstName: "alphs",
  unit: "yak",

  returnThis: function () {
    return this;
  },
  getFullName() {
    console.log(`${this.firstName} ${this.unit}`);
  },
};

console.log("employee id " + employee.id);
console.log("this inside the employee object", employee.returnThis()); // will be pointing towards the object

// when we invoke a method on an object the context of 'this' is bound to the object on which we have invoked the method

employee.getFullName();

const tom = {
  name: "Tom",
  age: 8,
};

const jerry = {
  name: " jerry",
  age: 5,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} old `);
  };
}

greetMe(tom);
console.log(tom);
tom.logMessage(); // implicit binding , this is referring to the object on which the function is getting invoked
greetMe(jerry);
jerry.logMessage();

// inside function
function sayName() {
  console.log("this is inside a function ", this);
}
sayName(); // windows or global object depending where we are running the js script

function outer(a) {
  console.log("this is inside an outer function ", this);

  return function innerfunction(b) {
    console.log("this is inside an inner function ", this);
  };
}
const innerFunction = outer(5);
innerFunction(3);

// both the this are pointing to the window object

// without strict mode the this keyword declared inside a standalone function will always point to windows object

// if we are using strict mode then the this keyword declared inside the standalone function will give undefine

// inside an arrow function

const getFood = () => this;

console.log(
  "This inside an arrow function defined in global scope ",
  getFood()
);

// this is still pointing to window object even if we are in strict mode for arrrow function declared in global scope
/**
 *  this keyword inside the arrow function always bound to the context of the parent scope of where you have defined the arrow function yes that's the right assumption to have so for
Arrow function it doesn't have its own this it means that if you have usage of
this keyword inside an arrow function how the this keyword will be resolved is
always by where exactly your arrow function is placed means it's lexical
scope and you have to see what is there in the surrounding the surrounding of
 */

const food = {
  name: "apple",
  color: "yellow",

  //   getDesc: () => `${this.name} is of ${this.color}`,
  // can we make this arrow function work as intended ? yes by playing this arrow function one level down

  getDesc: function () {
    return () => `${this.name} is of ${this.color}`;
  },
};
const gettingDesc = food.getDesc();
console.log(gettingDesc()); // now this works as intended

// it will still give undefine becase the object food is declared in global scope as arrow function doesn't have its own this so it looks for it in its parents scope here its parent is object and the scope of parent is global i.e the object is declared gloabally so the scope is global
console.log("------------");

// Explicit binding ~ call , apply, bind
// explicit binding ~ binding this or binding the value of this to something which is unrelated means it belongs to different execution context

// the call method to achieve explicit binding

function greeting() {
  console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
  name: "bob",
  address: "charlie company",
};

//  now we want to call the greeting function in context of user object
greeting.call(user);

// another scenerio what if function is defined with parameters

const likes = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " and " + hobby2);
};

const person = {
  name: "delta",
};

// parameters can be passed after passing the object to which we r binding this

likes.call(person, "football", "cricket");

//in apply method we can pass the parameters in array form instead of passing in comma seprated ways

const hobbyInApplyForm = ["dancing", " singing"];

likes.apply(person, hobbyInApplyForm);

// bind method ~ in case of bind it won't give you the result of the execution of the function on which we are calling the bind rather it will return u a completely new function that you can execute in later point in time to get the desired output

const newHobbies = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + ", " + hobby2);
};

const officer = {
  name: "echo",
};

const newfn = newHobbies.bind(officer, "singing", "dancing");

newfn();
