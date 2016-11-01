var posX = 0; // mouse starting positions
var posY = 0;
var offsetX = 0; // current element offset
var offsetY = 0;
var dragElement; // needs to be passed from onMouseDown to onMouseMove
var oldZIndex = 0; // we temporarily increase the z-index during drag
var orderCount = 0;
var count = 0;
var elements = document.getElementsByClassName("heading");
var hasBeenClicked1 = false;
var hasBeenClicked2 = false;
var hasBeenClicked3 = false;
var hasBeenClicked4 = false;
var hasBeenClicked5 = false;
var hasBeenClicked6 = false;
var hasBeenClicked7 = false;

document.onmousedown = onMouseDown;
document.onmouseup = onMouseUp;

function onMouseUp(e) {
  if (dragElement != null) {
    dragElement.style.zIndex = oldZIndex;

    document.onmousemove = null;
    document.onselectstart = null;
    dragElement.ondragstart = null;
    orderCount = checkOrder(dragElement);
    // if (orderCount == 7) {
    //   alert("Nice work");
    // }
    // stop dragging
    dragElement = null;
  }
}

function onMouseDown(e) {
  if (e == null)
      e = window.event;

  // IE uses srcElement, others use target
  var target = e.target != null ? e.target : e.srcElement;

  // for IE, left click == 1
  // for Firefox, left click == 0
  if ((e.button == 1 && window.event != null ||
          e.button == 0) &&
      hasClass(target, "drag")) {
    // get mouse position
    posX = e.clientX;
    posY = e.clientY;

    // get clicked element's position
    offsetX = getPosition(target.style.left);
    offsetY = getPosition(target.style.top);

    // bring the clicked element to the front while it is being dragged
    oldZIndex = target.style.zIndex;
    target.style.zIndex = 10000;

    dragElement = target;

    document.onmousemove = onMouseMove;

    document.body.focus();

    // prevent text selection in IE
    document.onselectstart = function() {
      return false;
    };
    // prevent IE from trying to drag an image
    target.ondragstart = function() {
      return false;
    };
    return false;
  }
}

function onMouseMove(e) {
  if (e == null)
    var e = window.event;

  dragElement.style.left = (offsetX + e.clientX - posX) + 'px';
  dragElement.style.top = (offsetY + e.clientY - posY) + 'px';
}

function getPosition(value) {
  var n = parseInt(value);
  return n == null || isNaN(n) ? 0 : n;
}

function hasClass(el, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(el.className);
}

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

function checkOrder(dragElement) {
  if (dragElement.innerHTML == "S") {
    if (isInCorrectSpot(dragElement, elements, 1) && !hasBeenClicked1) {
      count++;
      hasBeenClicked1 = true;
    }
  }
  if (dragElement.innerHTML == "A") {
    if (isInCorrectSpot(dragElement, elements, 2) && !hasBeenClicked2) {
      count++;
      hasBeenClicked2 = true;
    }
  }
  if (dragElement.innerHTML == "R") {
    if (isInCorrectSpot(dragElement, elements, 3) && !hasBeenClicked3) {
      count++;
      hasBeenClicked3 = true;
    }
  }
  if (dragElement.innerHTML == "A") {
    if (isInCorrectSpot(dragElement, elements, 4) && !hasBeenClicked4) {
      count++;
      hasBeenClicked4 = true;
    }
  }
  if (dragElement.innerHTML == "T") {
    if (isInCorrectSpot(dragElement, elements, 5) && !hasBeenClicked5) {
      count++;
      hasBeenClicked5 = true;
    }
  }
  if (dragElement.innerHTML == "A") {
    if (isInCorrectSpot(dragElement, elements, 6) && !hasBeenClicked6) {
      count++;
      hasBeenClicked6 = true;
    }
  }
  if (dragElement.innerHTML == "N") {
    if (isInCorrectSpot(dragElement, elements, 7) && !hasBeenClicked7) {
      count++;
      hasBeenClicked7 = true;
    }
  }
  return count;
}

function isInCorrectSpot(element, elements, position) {
  var elementsInFront = 0;

  if (position == 1) {
    var offset1 = getOffset(element).left;
    for (i = 0; i < elements.length; i++) {
      if (offset1 < getOffset(elements[i]).left) {
        elementsInFront++;
      }
    }
    if (elementsInFront == 6) {
      return true;
    }
    return false;
  }
  if (position == 2) {
    var offset1 = getOffset(element).left;
    for (i = 0; i < elements.length; i++) {
      if (offset1 < getOffset(elements[i]).left) {
        elementsInFront++;
      }
    }
    if (elementsInFront == 5) {
      return true;
    }
    return false;
  }
  if (position == 3) {
    var offset1 = getOffset(element).left;
    for (i = 0; i < elements.length; i++) {
      if (offset1 < getOffset(elements[i]).left) {
        elementsInFront++;
      }
    }
    if (elementsInFront == 4) {
      return true;
    }
    return false;
  }
  if (position == 4) {
    var offset1 = getOffset(element).left;
    for (i = 0; i < elements.length; i++) {
      if (offset1 < getOffset(elements[i]).left) {
        elementsInFront++;
      }
    }
    if (elementsInFront == 3) {
      return true;
    }
    return false;
  }
  if (position == 5) {
    var offset1 = getOffset(element).left;
    for (i = 0; i < elements.length; i++) {
      if (offset1 < getOffset(elements[i]).left) {
        elementsInFront++;
      }
    }
    if (elementsInFront == 2) {
      return true;
    }
    return false;
  }
  if (position == 6) {
    var offset1 = getOffset(element).left;
    for (i = 0; i < elements.length; i++) {
      if (offset1 < getOffset(elements[i]).left) {
        elementsInFront++;
      }
    }
    if (elementsInFront == 1) {
      return true;
    }
    return false;
  }
  if (position == 7) {
    var offset1 = getOffset(element).left;
    for (i = 0; i < elements.length; i++) {
      if (offset1 < getOffset(elements[i]).left) {
        elementsInFront++;
      }
    }
    if (elementsInFront == 0) {
      return true;
    }
    return false;
  }
}
