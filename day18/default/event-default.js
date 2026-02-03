console.log("event Default behaviour");

document.getElementById("websiteLink").addEventListener("click", (e) => {
  e.preventDefault(); // this prevents the default behavious of click event which was here opening the website on new tab
  console.log("default link behavior prevented");
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("default behaviour prevented");
});
