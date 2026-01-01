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
