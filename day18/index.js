// Event Handling

// - What is an Event?
// - Event Handling in markup
// - Event Handling in Script
// - addEventListener
// - removeEventListener
// - Handling Multiple Listeners
// - DOM Content Loaded
// - Anatomy of Event Object
// - Event Bubbling
// - Event Capturing
// - Event Delegation
// - Stop Propagation
// - Preventing Defaults
// - Custom Events
// - Project - FAQ
// - The Task and Wrap Up

// what is an event
// an event is just a signal that something has happened in the browser

// Event handling in markup when event listeners are defined in html

function handleClick(greeting) {
  console.log(`hello ${greeting}`);

  //   console.log(`hello `);
}

const myBtn2Elem = document.getElementById("myBtn2");

myBtn2Elem.onclick = function () {
  console.log("my btn 2 is clicked ");
};

// myBtn2Elem.onclick = handleClick;

// no parentheis are passed with function as it will start its execution there and will return undefine to onclick so we pass function to onclick not the returned value from the execution

// what if we want to pass an argument ~ we wrap our function in another function without argument and pass it

myBtn2Elem.onclick = () => handleClick("hola amigos");

// add event listener and remove event listener

const countBtnElem = document.getElementById("countBtn");

// addEventListener takes 3 parameters, two are mandotary and 1 is optional

countBtnElem.addEventListener();
