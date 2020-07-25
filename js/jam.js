"use strict";

let jamGridContainer = document.getElementById("jam-grid-container");
let normalGridContainer = document.getElementById("normal-grid-container");
let jamButton = document.getElementById("jam-button");
let body = document.getElementsByTagName("body")[0];

jamButton.addEventListener("click", () => {
  updateJam();
});

function updateJam() {
  if (
    jamGridContainer.style.display === "none" &&
    normalGridContainer.style.display === "grid"
  ) {
    jamButton.textContent = "Jam it down";
    jamButton.classList.remove("not-jam");
    normalGridContainer.style.display = "none";
    jamGridContainer.style.display = "grid";
    body.style.backgroundImage = "url('/images/bg_stars.gif')";
  } else {
    jamButton.textContent = "Jam it up";
    jamButton.classList.add("not-jam");
    jamGridContainer.style.display = "none";
    normalGridContainer.style.display = "grid";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#dfeaf5";
  }
}
