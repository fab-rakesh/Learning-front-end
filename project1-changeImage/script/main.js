function displayName(userName) {
  document.querySelector("h1").textContent = `I'm cool, ${userName}`;
}

function removeName() {
  localStorage.removeItem("name");
  document.querySelector("h1").textContent = "I'm Cool";
}

function storeName(userName) {
  localStorage.setItem("name", userName);
  return userName;
}

function askName() {
  const userName = prompt("Pleae enter your name");
  if (!userName) askName();
  else return userName;
}

// display name
const userName = localStorage.getItem("name");
if (userName) displayName(userName);
else displayName(storeName(askName()));

// change name
document.querySelector("#button>:first-child").onclick = () => {
  displayName(storeName(askName()));
};

// remove name
document.querySelector("#button>:last-child").onclick = () => {
  removeName();
};

// change image
const myImg = document.querySelector("img");
myImg.onclick = () => {
  if (myImg.getAttribute("src") === "images/apple.png") {
    myImg.style.width = "280px";
    myImg.setAttribute("src", "images/firefox.png");
  } else {
    myImg.style.width = "500px";
    myImg.setAttribute("src", "images/apple.png");
  }
};
