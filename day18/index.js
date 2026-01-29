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

// third one is optional which is concerned about evene bubbling

const hadleEvent = function () {
  console.log("counter", counter);
  counter++;
  display.innerText = counter;
};

countBtnElem.addEventListener("click", hadleEvent);

// by this way(using addEventListener) we can assign mulitple event handler function to single function
//removing event listener ~ like we want to include some other script so we want to remove events linked with ui from previous script so

// first parameter is same like the event second parameter is event handling function which we wish to remove

countBtnElem.removeEventListener("click", hadleEvent);
