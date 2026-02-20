let parentVar = document.querySelector(".tab-headers");

let tabElems = document.querySelectorAll(".tab");
let contentElems = document.querySelectorAll(".content");

function switcher(id) {
  // 1. Reset
  tabElems.forEach((tab) => tab.classList.remove("active"));
  contentElems.forEach((content) => content.classList.remove("active"));

  // 2. Activate
  document.querySelector(`.tab[data-tab="${id}"]`).classList.add("active");
  document.querySelector(`.content[data-tab="${id}"]`).classList.add("active");

  // 3. Broadcast (Inside the function!)
  const event = new CustomEvent("tabChanged", { detail: { tabId: id } });
  parentVar.dispatchEvent(event); // Use the variable you defined: parentVar
}

parentVar.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab")) {
    switcher(e.target.dataset.tab);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == 1 || e.key == 2 || e.key == 3) {
    switcher(e.key);
  }
});
// This "hears" the broadcast you sent from the switcher function
parentVar.addEventListener("tabChanged", (e) => {
  // The data you put in the "detail" object is accessible here
  console.log("Tab changed to:", e.detail.tabId);
});
