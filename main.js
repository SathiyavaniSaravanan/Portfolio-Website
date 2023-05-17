let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// SideMenu
var sideMenu = document.getElementById("sideMenu");
function openMenu() {
  sideMenu.style.right = "0"; //because already in CSS position property applied
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

//GoogleSheet
//Reference for how to use GoogleSheet :https://github.com/jamiewilson/form-to-google-sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycby6hwvK3hHb_ljEurkWyfYsmAuc2YjfHKyyJBXUj7nB6ZB8AYnhO06O1dXIeXkpt8Fh/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(response => {
          msg.innerHTML = "Message sent successfully";
          setTimeout(() => {
              msg.innerHTML = "";
          }, 5000)
          form.reset();
    })
    .catch(error => console.error("Error!", error.message));
});
