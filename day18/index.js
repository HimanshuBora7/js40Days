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
  document.querySelector;
  console.log("my btn 2 is clicked ");
};

// myBtn2Elem.onclick = handleClick;

// no parentheis are passed with function as it will start its execution there and will return undefine to onclick so we pass function to onclick not the returned value from the execution

// what if we want to pass an argument ~ we wrap our function in another function without argument and pass it

myBtn2Elem.onclick = () => handleClick("hola amigos");

// trial method

const btnD = document.querySelector("#theme-toggle");

btnD.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    btnD.textContent = "light mode";
  } else {
    btnD.textContent = "dark mode";
  }
});

// add event listener and remove event listener

const countBtnElem = document.getElementById("countBtn");
let counter = 0;

const display = document.querySelector("#counter-value");

// addEventListener takes 3 parameters, two are mandotary and 1 is optional

// first parameter is about the event we are interested in dealing with

// second parameter is about defining what will happen when the event happens basically a function which will execute when the even happens

// third one is optional which is concerned about event bubbling

const handleEvent = function () {
  console.log("counter", counter);
  counter++;
  display.innerText = counter;
};

countBtnElem.addEventListener("click", handleEvent);

// by this way(using addEventListener) we can assign mulitple event handler function to single function
//removing event listener ~ like we want to include some other script so we want to remove events linked with ui from previous script so

// first parameter is same like the event second parameter is event handling function which we wish to remove
function greeting() {
  console.log("helloo jii");
}
countBtnElem.addEventListener("click", greeting);

countBtnElem.removeEventListener("click", handleEvent);

// DOM content loaded

// in case we want to check whether the dom content has been loaded or not

//for dom content load event handling we have to  use addEventListener always

// will never run
document.onDOMcontentLoaded = function () {
  console.log("dom content loaded ");
};

// below code works
document.addEventListener("DOMContentLoaded", function () {
  console.log("dom content successfully loaded ");
});

// anatomy of event object
// everytime event happens we get an event object as part of our event handler function
// event object is a hidden treasure it helps us in identifying what kind of event is happening

const searchElem = document.getElementById("search-id");

function handleChange(event) {
  console.log(event); //event object is passed to the function called we can name it anything here we have named it event

  // to know what kind of event has occured
  console.log("Event type: ", event.type);

  // other helpful properties

  console.log("Target: ", event.target);
  console.log("Target Name: ", event.target.name);
  console.log("Target value: ", event.target.value);
  console.log("Event type: ", event.type);
  console.log("Current Target: ", event.currentTarget); // it tells abt the element triggered the event
  console.log(this); // it refers to the element itself on which eventHandler function is added
}

searchElem.addEventListener("change", handleChange);
