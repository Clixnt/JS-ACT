// Code By Clint Justine Lorenzo
// • Container
const wallDsgn = document.getElementById("wallDsgn");
const roofDsgn = document.getElementById("roofDsgn");
const windowDsgn = document.getElementById("windowDsgn");
const doorDsgn = document.getElementById("doorDsgn");
const bellDsgn = document.getElementById("bellDsgn");
const GrassDsgn = document.getElementById("GrassDsgn");

// • Buttons
const reset = document.getElementById("resetLorenzo");
const roof = document.getElementById("roof");
const wall = document.getElementById("wall");
const door = document.getElementById("door");
const windows = document.getElementById("windows");
const showAll = document.getElementById("showAll");

reset.onclick = function () {
  roofDsgn.style.opacity = "0";
  wallDsgn.style.opacity = "0";
  GrassDsgn.style.opacity = "0";
  doorDsgn.style.opacity = "0";
  windowDsgn.style.opacity = "0";
  bellDsgn.style.opacity = "0";
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
    wallDsgn.style.opacity = "1";
    GrassDsgn.style.opacity = "1";
    wallDsgn.style.rotate = "360deg";
    GrassDsgn.style.rotate = "360deg";
  } else {
    wallDsgn.style.opacity = "0";
    GrassDsgn.style.opacity = "0";
    wallDsgn.style.rotate = "0deg";
    GrassDsgn.style.rotate = "0deg";
  }
};

door.onclick = function () {
  if (doorDsgn.style.opacity === "0") {
    doorDsgn.style.opacity = "1";
    bellDsgn.style.opacity = "1";
    doorDsgn.style.rotate = "360deg";
    bellDsgn.style.rotate = "360deg";
  } else {
    doorDsgn.style.opacity = "0";
    bellDsgn.style.opacity = "0";
    doorDsgn.style.rotate = "0deg";
    bellDsgn.style.rotate = "0deg";
  }
};

windows.onclick = function () {
  if (windowDsgn.style.opacity === "0") {
    windowDsgn.style.rotate = "360deg";
    windowDsgn.style.opacity = "1";
  } else {
    windowDsgn.style.opacity = "0";
    windowDsgn.style.rotate = "0deg";
  }
};

showAll.onclick = function () {
  roofDsgn.style.opacity = "1";
  wallDsgn.style.opacity = "1";
  GrassDsgn.style.opacity = "1";
  doorDsgn.style.opacity = "1";
  windowDsgn.style.opacity = "1";
  bellDsgn.style.opacity = "1";
};
