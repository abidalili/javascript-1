var myVar = document.querySelector("#paraId");

function addStyle() {
  myVar.classList.add("para-style");
  // myVar.style.color = "red";
  // myVar.style.fontSize = "3rem";
  // myVar.style.fontWeight = "bold";
  // myVar.style.fontStyle = "italic";
}

function removeStyle() {
  myVar.classList.remove("para-style");
}
