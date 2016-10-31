var posX = 0; // mouse starting positions
var posY = 0;
var offsetX = 0; // current element offset
var offsetY = 0;
var dragElement; // needs to be passed from onMouseDown to onMouseMove
var oldZIndex = 0; // we temporarily increase the z-index during drag

document.onmousedown = onMouseDown;
document.onmouseup = onMouseUp;

function onMouseUp(e) {
  if (dragElement != null) {
    dragElement.style.zIndex = oldZIndex;

    document.onmousemove = null;
    document.onselectstart = null;
    dragElement.ondragstart = null;

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
}
