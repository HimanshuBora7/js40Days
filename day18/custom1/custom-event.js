// three steps are involved in creating custom event

// step1 : Create a custom event
// js gives up api to make custom event which is CustomEvent
// it is a constructor function
// we have to create a instance of it using new keyword

const myEvent = new CustomEvent("userLoggedIn", {
  detail: {
    username: "bob",
    role: "admin",
  },
});
// step2: listen to the custom event
document.addEventListener("userLoggedIn", (e) => {
  console.log(`User login detected ${e.detail.username}`);
});
// step3: Dispatching the custom event
document.dispatchEvent(myEvent);

function loginUser(username) {
  const event = new CustomEvent("userLoggedIn", {
    detail: { username },
  });
  document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn", (e) => {
  const user = e.detail.username;
  document.getElementById("welcome").textContent = `Welcome, ${user}`;
});
