// drag and drop code coming from codepen wesbite

// Learnt and adapted from: http://tech.pro/tutorial/650/javascript-draggable-elements from a user comments post/code (@TheDesigner in 2009-ish).

// Global variables without any specified type (type will be determined when used in the functions below).
var obj, x, y, prev_x, prev_y;

function drag(e) {
  // Yep, use the object I just clicked on.
  obj = e.target;
  // Set current X coordinate minus distance left from offsetParent node.
  prev_x = x - obj.offsetLeft;
  // Set current Y coordinate minus distance top from offsetParent node.
  prev_y = y - obj.offsetTop;
}

function move(e) {
  // Always track and record the mouse's current position.
  if (e.pageX) {
    x = e.pageX; // X coordinate based on page, not viewport.
    y = e.pageY; // Y coordinate based on page, not viewport.
  }
  //  else if (e.clientX) {
  //    x=clientX; // X coordinate based on viewport.
  //    y=clientY; // Y coordinate based on viewport.
  //  }

  // If the object specifically is selected, then move it to the X/Y coordinates that are always being tracked.
  if (obj) {
    obj.style.left = x - prev_x + "px";
    obj.style.top = y - prev_y + "px";
  }
}

function drop() {
  // Revert to the default css style.
  obj.style.background = "";
  // Remove the attached event from the element so it doesn't keep following your mouse. :)
  obj = false;
}

// actions taken when website loaded
window.addEventListener("load", (event) => {
  document.getElementById("smile").style.top =
    Math.random() * window.innerWidth + "px";
  document.getElementById("smile").style.left =
    Math.random() * window.innerHeight + "px";

  document.getElementById("cry").style.top =
    Math.random() * window.innerWidth + "px";
  document.getElementById("cry").style.left =
    Math.random() * window.innerHeight + "px";

  document.getElementById("crazy").style.top =
    Math.random() * window.innerWidth + "px";
  document.getElementById("crazy").style.left =
    Math.random() * window.innerHeight + "px";

  document.getElementById("ghost").style.top =
    Math.random() * window.innerWidth + "px";
  document.getElementById("ghost").style.left =
    Math.random() * window.innerHeight + "px";

  document.getElementById("angel").style.top =
    Math.random() * window.innerWidth + "px";
  document.getElementById("angel").style.left =
    Math.random() * window.innerHeight + "px";

  document.getElementById("sad").style.top =
    Math.random() * window.innerWidth + "px";
  document.getElementById("sad").style.left =
    Math.random() * window.innerHeight + "px";

  document.getElementById("money").style.top =
    Math.random() * window.innerWidth + "px";
  document.getElementById("money").style.left =
    Math.random() * window.innerHeight + "px";
});

// Make a specific element movable
document.getElementById("smile").onmousedown = drag;
document.getElementById("cry").onmousedown = drag;
document.getElementById("crazy").onmousedown = drag;
document.getElementById("ghost").onmousedown = drag;
document.getElementById("angel").onmousedown = drag;
document.getElementById("sad").onmousedown = drag;
document.getElementById("money").onmousedown = drag;
document.onmousemove = move;
document.onmouseup = drop;
