console.log("Array pt2");

let res = Array.isArray([]); // returns true
console.log(res);

// Array destructuring in JavaScript

const fruits = ["apple", "orange", "mango", "grapes"];

/**
 * const apple = fruits[0];
 * const orange = fruits[1];
 * const mango = fruits[2];
 */

const [apple, orange, mango] = ["apple", "orange", "mango"];
// now the individual element from the array will be held by the variables

console.log(apple);
console.log(orange);
console.log(mango);

//skipping a value
const [one, , three, four] = [1, 2, 3, 4];
console.log(one);
console.log(three);
console.log(four);

// nested array ~ array inside another array
// eg. [1,2[4,5]]

// ... Rest parameter and spread operator

// ...(three dots) is used for syntax of rest parameter and spread operator
//helps in array destructaring
// depending on it usage it is either referred as spread operator or rest parameter

// for rest parameter these three dots appears at the left side of the destructuring sytax

// when we use rest parameter these three dots appears on the left side of the assignment operator
// when we use spread operator these three dots appears on the right side of the assignment operator

// rest parameter goes with variables
// spread operator goes with array values

const fruit = ["🍇", "🍉", "🍍", "🥭", "🍎"];

const [grapes, watermelon, ...rest] = ["🍇", "🍉", "🍍", "🥭", "🍎"];
// first two elements will be asssigned to the two variable declared and rest will be added to the array name after 3 dots here it is named rest
console.log(grapes);
console.log(watermelon);
console.log(rest);

// spread operator can be used to clone and copy existing array

const myFruit = ["🍇", "🍉", "🍍", "🥭", "🍎"];
const myFruitCopy = [...myFruit];
console.log("copied array ", myFruitCopy);

// use cases of rest parameter and spread operator
// how to swap values with destructuring
// how to merge arrays ?

// swapping

let first = "🍇";
let second = "🍉";
console.log("first", first);
console.log("second", second);

[first, second] = [second, first];
console.log("first", first);
console.log("second", second);

// merge
const emotions = ["😷", "🤒"];
const flags = ["🇮🇳", "🇦🇺", "🎌"];

const emotional_flag = [...emotions, ...flags];
console.log(emotional_flag);

// length is a property in js not a method

const arr1 = [11, 12, 13];
const arr2 = new Array(2);
console.log(arr2.length);
console.log(arr1.length);

// the array can hold elements till 2^32 -1

// JavaScript array mehtods
// the concat() array method
// the join () array method
// the fill()  array method
// the includes() array method
// the indexOf() array method
// the reverse() array method
// the sort() array method
// the splilce() array method
// the at() method
// the copyWithin() Method
// the flat() method
// Grouping elements in Array

// concat()) ~ merges one or more array and return merged array, immutable method ~ does not change source array

const myFirst = [1, 2, 3];
const mySecond = [4, 5, 6];

const merged = myFirst.concat(mySecond);
console.log(merged);

// concat take more than one parameter
// so we can merge as many array we want

const myThird = [7, 8, 9];

const secondMerge = myFirst.concat(mySecond, myThird);
console.log("second merger", secondMerge);

//join ~ joins all the array elements together using a seprater by default the seprater is comma if u pass none  and returns a string

const myEmotions = ["🫠", "😮‍💨", "😮"];

const joined = myEmotions.join("<>");
console.log(joined);

// join used where we want string out of elements of array

[].join; // empty string as there is nothing to join

// fill () ~ helps to fill an array with static value
// it mutates the source array

const colors = ["red", "blue", "pink"];
console.log(colors);
colors.fill("pink", 1, 3); //1 -> the index from where u want to start fill , 3 -> the length not the index till u want it to fill //
console.log(colors);

//includes () ~ determines presence of element in an array if the element is present in the array it return true if not it returns false
//it is case sensitive
let check_col = colors.includes("orange");
console.log(check_col); //false
check_col = colors.includes("pink");
console.log(check_col); //true

//indexof() ~ returns index position of the first occurence of the element passed as an argument
// returns -1 if passed argument doesn't includes as element in the array
let ind = colors.indexOf("pink");
console.log(ind);
ind = colors.indexOf("orange");
console.log(ind);

//lastIndexOf () ~ returns the index of last occurence of the passed argument if it exits

// reverse () ~ reverses the position of elements in an array
//mutates the source array
const name1 = ["tom", "jerry", "oggy", "shinchan"];
console.log(name1);
name1.reverse();
console.log(name1);

//sort() ~ sorts the array
// converts the each of elements type to string and then sorts them
// default sort order is ascending
//mutates the original array
const names2 = ["tom", "alex", "bob"];
console.log(names2);
names2.sort();
console.log(names2);

// to sort in decending order we have to write a comparator function
// that comparator function can be passed as parameter to sort function
// for decending sort the key is -1
names2.sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});

console.log(names2);

let ages = [2, 199, 100, 10, 4, 7];
ages.sort();
console.log("age with default sorting", ages);
// here we are not getting the desired result as js do comparison after converstion to string so the numerical values inside array are getting into strings and then the comparison is happening

ages.sort(function (a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
});

console.log("age with default sorting", ages);

// splice() method ~ deletes elements frm array, add an element to the array also modify the element in an array

// splice(start, deleteCount, item ,item1, item2)

// start ~ it is the 0 based index from where you want to change the array
// deleteCount is the integer number that will indicate how many elements you want to delete from this array starting from the start position

// the elements passed after deletecount are the elements supposed to be added beginning from the start index

// splice always returns an array containing deleted elements
// if no item is deleted then empty array will be returned

const names = ["aplha", "bravo", "charlie", "delta"];
console.log(names);
console.log(names.splice(0, 1)); // aplha will be reutrned as it is getting deleted
console.log(names);
names.splice(0, 0, "john", "calvalry");
console.log(names);

// splice() mutates the array ,slice () doesn't

// at() ~ helps to retrieve values frm an array by taking both positive and negative value in argument
// -ve value means the counting will start from behind

const codeName = ["alpha", "bravo", "charlie"];
console.log(codeName.at(-1));

// flat () ~ taking out elements from nested arrays

const arr11 = [0, 1, 2, 3, [0, 1, 2, 3, [1, 2, 3, 4, 5]]];
console.log(arr11);

// we can specifiy to what depth the flating should happen by passing argument by default till first nesting the flatting of array happens
console.log("flattened array ", arr11.flat());
console.log("flattened array ", arr11.flat(2));

// grouping ~ using method from object to group elements of an array
{
  const employee = [
    { name: " bob", dept: "engineering", salary: 5000 },
    { name: "Alex", dept: " HR", salary: 3000 },
    { name: "charlie", dept: "Engineering", salary: 7000 },
    { name: "delta", dept: "Engineering", salary: 1000 },
    { name: "Echo", dept: "sales", salary: 1000 },
  ];
  const groupByDept = Object.groupBy(employee, ({ dept }) => dept); // pass the array first, then a call back function with key
  console.log(groupByDept);

  const groupByMoreThan5000 = Object.groupBy(employee, ({ salary }) => {
    return salary >= 5000 ? "more than 5k" : "less than 5k";
  });
  console.log(groupByMoreThan5000);
}

// toReversed () ~ immutable verion of toReverse()
const items = [1, 2, 3];
const reversedArray = items.toReversed();

console.log("reversed array: ", reversedArray);
console.log("original array: ", items);

// toSorted() ~ immutable verion of toSort();
// toSplice() ~ immutable version of toSplice
// it returns a new array in this case

const months = ["jan", "mar", "apr"];
const modifiedMonth = months.toSpliced(1, 0, "feb");
console.log(modifiedMonth);

// with() ~ modifies without mutating the source array

// -------------------------------------------------

// Array like ~ it not an array, it is an object with array like behaviour like indexes can be used to access the elements and non negative length property

// {key: value} ~ object
// [1,2.3] ~ array

const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };
console.log(typeof arr_like);

console.log(arr_like[2]);

console.log(Array.isArray(arr_like)); // false
console.log(arr_like instanceof Object); //true

// js uses array like objects at various places

function checkArgs() {
  console.log(arguments);
}

checkArgs(1, 45); // [Arguments] { '0': 1, '1': 45 }
// looks like array but it is an object

// Iteration over array like ~ first conversion of it to array

// applying spread operator on arrayLike

function checkArgsAgain() {
  console.log("Array like args", arguments);
  const argArr = [...arguments];

  console.log("Converted array args", argArr);

  argArr.forEach((elem) => console.log(elem));
}
checkArgsAgain(1, 45);
//using Array.from()
// Array.from() is a static method which takes array like object and returns a true array on which we can apply array methods

// fromAsync() similar to Array.from() but it returns promises
// html collection is also an array like

const ret = Array.fromAsync({
  0: Promise.resolve("Script"),
  1: Promise.resolve("google"),
  2: Promise.resolve("Apple"),

  length: 3,
}).then((value) => console.log(value));

console.log(ret);

// of()~ static method which helps us to create new array instance from any number of arguments

const a = new Array(1.2, 3);
const b = [4, 5, 6];

const c = Array.of(2, true, { name: "alpha" });
console.log(c);

//-----------------------------------------------------

// Array Iterator mehtods

// filter()

let customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

// filter() - Get 'Senior Citizens' by Filtering out other customers

// syntax for filter method
/**
 * const newArray = arr.filter((element,index,array) =>{ do something here on elements and it will ne applied to every element
 * });
 * it returns only those elements in array which passes the test condition written inside call back function
 */
const seniorCiti = customers.filter((customer) => {
  return customer.age > 60;
});

console.log("list of senior citizens", seniorCiti);

// filter method is js array method which takes a call back function like a test function that runs on every element of an array if the test function returns true then that element is part of the returned array otherwise not

// map() ~ takes a transformation function and returns a array after applying that logic on each individual element

//using map () to add full name plus title based on their gender to their data

const customerFullName = customers.map((customer) => {
  let title = "";
  if (customer.gender === "M") {
    title = "Mr.";
  } else {
    title = "Mrs.";
  }

  customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name} `;

  return customer;
});

const updatesList = console.log(customerFullName);

// reduce method

// test example ~ find the avg age of the ppl purchased book

// in simpler terms reduce method is used to reduce the value of arrays elements to the single value

// like filter used test call back function
// map took transformation call back function
// syntax for reduce method it takes two argument -> one call back function and one optional initial value argument

// a reducer function which is also called as callback function to be called on each element of the array

// arr1.reduce(reducer(accumulator, currentValue, index, array){
// }, initialValue);

// accumulator value is initalised with the initial value passed as 2nd argument
// accumulator accumulates reducers return value
// what is return value of reducer ?
// reducer fucntion returns the operation we performed on accumulator and currentvalue

//example

const arr = [1, 2, 3, 4];
//find summation usin reduce method

const result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("result of summation " + result);
let count = 0;
// find the avg age of the customer who have purchased the book
const totalAge = customers.reduce((accumulator, customer) => {
  if (customer.purchased.includes("Book")) {
    accumulator = accumulator + customer.age;
    count++;
  }
  return accumulator;
}, 0);
const myAvg = count > 0 ? totalAge / count : 0;
console.log(
  "average age of customers who have purchased book ",
  Math.floor(myAvg)
);

// some ~ checks if specified condition is atleast met for even one element or it returns true even if one element from the array met  specified condition

// arr.some((Element,index,array) =>{

// })

// problem to solve using some method, find do we have a young customer (age less than 10 years) ?

const hasYoung = customers.some((customer) => {
  return customer.age < 10;
});
console.log(hasYoung);

// every ~ opposite of some, returns true only if every elements of the array satisfies the condition

// check if every customer is married
const isAllMarried = customers.every((customer) => {
  return customer.married;
});
console.log("is all married in the customer ", isAllMarried);

// find ~ find the younges customer
const foundYoungCustomer = customers.find((customers) => {
  return customers.age < 10;
});
console.log("is there any young customer", foundYoungCustomer.f_name);
// find method returns null if it doesn't find anything
// findIndex() method returns index at which the element is found

// array method chaining ~ used to solve more complex problem

// use case: Get the total amount spent by married customers

// reduce() ~ method to get single value of total amount
// filter() ~ method to filter out only married customers

// find all the married customers
const totalExpense = customers
  .filter((customer) => {
    return customer.married;
  })
  .reduce((accumulator, customer) => {
    return accumulator + customer.expense;
  }, 0);

console.log("total expense by married ppl ", totalExpense);

// forEach ~ applied on every element of array, does not return anything the buisness logic has to be inside the forEach
{
  const arr = [1, 2, 3, 4, 4];
  sum = 0;
  arr.forEach((x) => {
    sum += x;
  });
  console.log(sum);
}
