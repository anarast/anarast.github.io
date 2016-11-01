var elements = document.getElementsByClassName("heading");

function addLetters(name) {
  for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = name[i];
  }
}

function isValidName(name) {
  if (isInArray("S", name) && isInArray("R", name) &&
    isInArray("T", name) && isInArray("N", name) &&
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
    if (!isInArray(letter, name) || (letter == "A" && !includesThreeAs(name))) {
      name.push(letter);
    }
  }
  return name;
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

var finishedName = createName();
addLetters(finishedName);
