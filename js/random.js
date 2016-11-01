var elements = document.getElementsByClassName("heading");

function addLetters(name) {
  for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = name[i];
  }
}

function isValidName(name) {
  if (name.includes("S") && name.includes("R") &&
    name.includes("T") && name.includes("N") &&
    includesThreeAs(name)) {
    return true;
  }
  else return false;
}

function includesThreeAs(name) {
  var count = 0;
  for (i = 0; i < name.length; i++) {
    if (name[i] == "A") {
      count++;
    }
  }
  if (count == 3) {
    return true;
  }
  else return false;
}

function createName() {
  var letter = "";
  var letters = "SARATAN";

  var name = [];

  while (name.length < 7 && !isValidName(name)) {
    letter = letters.charAt(Math.floor(Math.random() * 7));
    if (!name.includes(letter) || (letter == "A" && !includesThreeAs(name))) {
      name.push(letter);
    }
  }
  return name;
}

var finishedName = createName();
addLetters(finishedName);
