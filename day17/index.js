console.log("DOM manipulation first day ");
// DOM ~ programming interface for our web document
// it represents a page so using programming we can change a document structure, a style and content

/**
 * What is dom
 * understanding dom types
 * accessing dom
 * mini projects
 */

// DOM types
// 1.Document - root node
console.log(document);
// 2.Node - generic term for any element in dom tree, tyepes of nodes Element node, Text node, attribute node.
// 3.Element - specific type of node representing HTMl elements/tags
// 4.NodeList- array of nodes (ordered)
// 5.Attr - represent an attribute of node
// <img src="/" alt="some image"/>
// for this particular tag image we have src and alt as an attribute
// 6.NameNodeMap- a collection of attr. (not ordered)

// accessing DOm

//by getElementById

let titleElem = document.getElementById("heading");
console.log(titleElem);

//by Class name ~ returns array like means html collection
let infoElem = document.getElementsByClassName("info");
console.log(infoElem);
// itereating over array like
console.log(
  "iterating over array like which is html collection using spread operator as it converts html collextion into array and then we can apply forEach method on top of it which requires a call back function as argument where our buisness logic resides"
);
console.log(infoElem[0], infoElem[1]);
[...infoElem].forEach((elem) => {
  console.log(elem);
});

// by tag name

let pTagElem = document.getElementsByTagName("p");
console.log(pTagElem);
// this also returns html collection
console.log("iterating over p tag ");
[...pTagElem].forEach((tagElem) => {
  console.log(tagElem);
});

// Selectors - query selector and query selector all

// querySelector() ~ gives first matching element node with the selector passed in argument

let para = document.querySelector("p.info");
console.log("using query selector", para);

// query selector all ~ fetched every element node with matching selector ~ returns nodelist

let queryA = document.querySelectorAll("p.info");
console.log("using query selector all ", queryA);

let hOne = document.querySelector("#heading");
console.log("using query selector to get h1 ", hOne);

// DOM access method

// 1. getElementById(id);
// 2. getElementByClassname(className);
// 3. getElementByTagName(tagName);
// 4. querySelector(cssSelector);
// 4. querySelectorAll(cssSelector);
