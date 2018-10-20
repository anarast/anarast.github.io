var about = [
  'I got that red lip classic thing that you like',
  'I go on too many dates'
]

document.addEventListener('DOMContentLoaded', function(){ 
  function getRandomLine() {
    var listLength = about.length;
    var randomIndex = Math.floor((Math.random() * listLength));

    return about[randomIndex];
  }

  var toolTipElement = document.getElementsByClassName('tooltiptext')[0];
  toolTipElement.innerHTML = getRandomLine();
}, false);