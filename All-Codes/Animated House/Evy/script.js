// Code By Clint Justine Lorenzo
// • Container
const wallDsgn = document.getElementById("wallDsgn");
const roofDsgn = document.getElementById("roofDsgn");
const windowDsgn = document.getElementById("windowDsgn");
const doorDsgn = document.getElementById("doorDsgn");

// • Buttons
const reset = document.getElementById("resetLorenzo");
const roof = document.getElementById("roof");
const wall = document.getElementById("wall");
const door = document.getElementById("door");
const windows = document.getElementById("windows");

reset.onclick = function () {
  roofDsgn.style.opacity = "1";
  wallDsgn.style.opacity = "1";
  doorDsgn.style.opacity = "1";
  windowDsgn.style.opacity = "1";
};

roof.onclick = function () {
  if (roofDsgn.style.opacity === "0") {
    roofDsgn.style.rotate = "360deg";
    roofDsgn.style.opacity = "1";
  } else {
    roofDsgn.style.rotate = "0deg";
    roofDsgn.style.opacity = "0";
  }
};

wall.onclick = function () {
  if (wallDsgn.style.opacity === "0") {
    wallDsgn.style.rotate = "360deg";
    wallDsgn.style.opacity = "1";
  } else {
    wallDsgn.style.rotate = "0deg";
    wallDsgn.style.opacity = "0";
  }
};

door.onclick = function () {
  if (doorDsgn.style.opacity === "0") {
    doorDsgn.style.rotate = "360deg";
    doorDsgn.style.opacity = "1";
  } else {
    doorDsgn.style.rotate = "0deg";
    doorDsgn.style.opacity = "0";
  }
};

windows.onclick = function () {
  if (windowDsgn.style.opacity === "0") {
    windowDsgn.style.rotate = "360deg";
    windowDsgn.style.opacity = "1";
  } else {
    windowDsgn.style.rotate = "0deg";
    windowDsgn.style.opacity = "0";
  }
};
