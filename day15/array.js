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
