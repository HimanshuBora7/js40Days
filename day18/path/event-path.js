console.log("Event Bubbling, Capturing and Delegation");

// In event bubbling, the event starts from the target element and bubbles up through its ancestors

// the flow is: Child --> parents --> grandparents --> document

//bubbling

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("child clicked");
});

// capturing

// In event capturing, the event flows from the outmost ancestor down to the target element, It happens before the actual target handles the event.

// capturing is disabled by default
// after capturning phase the bubbling phase begins from target element as it is enabled by default

document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  true,
); // by passing extra argument, we are enabling the event capturing as it is disabled by default
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true,
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true,
);

// Event delegation - it is a technique where u add single event listener to a parent elemment, instead of adding individual event listeners to all of its children

document.getElementById("itemList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});

// In some cases u don't want event to bubble up so how do we stop event bubbling
// event stop propagation
document.getElementById("father").addEventListener("click", () => {
  console.log("parent clicked");
});

document.getElementById("son").addEventListener("click", (e) => {
  e.stopPropagation(); // this stops the event frm bubbling up to the parent
  console.log("son clicked");
});
