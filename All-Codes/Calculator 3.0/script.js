// Code By Clint Lorenzo
const display = document.getElementById("display");

// Libog nga part
function cos() {
  display.value = Math.cos(display.value);
  console.log(Math.cos);
}
function sin() {
  display.value = Math.sin(display.value);
}
function tan() {
  display.value = Math.tan(display.value);
}
function pi() {
  display.value = Math.PI(display.value);
}
// End of libog nga part

// Calculator Code
function DisplayKeys(input) {
  display.value += input;
}

function Delete() {
  display.value = display.value.slice(0, -1);
}

function Clear() {
  display.value = "";
}

function Calculate() {
  try {
    // Special case for 9 x 9
    if (display.value === "9*9") {
      display.value = "Idk bro just give up.";
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = " Error";
  }
}

// Change Mode (Face 1,2)
const faceOne = document.getElementById("face1");
const faceTwo = document.getElementById("face2");
const mode1 = document.getElementById("mode-num");
const mode2 = document.getElementById("mode-sc");

faceOne.onclick = function () {
  if (mode1.style.visibility === "hidden") {
    mode1.style.visibility = "unset";
  } else {
    mode2.style.visibility = "hidden";
  }
};
faceTwo.onclick = function () {
  if (mode2.style.visibility === "hidden") {
    mode2.style.visibility = "unset";
  } else {
    mode1.style.visibility = "hidden";
  }
};

// Click to close = Minimize, Maximize mac button
const Macbutton1 = document.getElementById("Macbutton1");
const Macbutton2 = document.getElementById("Macbutton2");
const Macbutton3 = document.getElementById("Macbutton3");
const Main = document.getElementById("closeMain");
const behind = document.getElementById("behind");
const ModesContainer = document.getElementById("ModesContainer");

Macbutton1.onclick = function () {
  Main.style.display = "none";
  ModesContainer.style.display = "none";
};

behind.onclick = function () {
  Main.style.display = "block";
  ModesContainer.style.display = "block";
};

Macbutton2.onclick = function () {
  document.body.classList.toggle("MinimizeToggle");
};

Macbutton3.onclick = function () {
  document.body.classList.toggle("MaximizeToggle");
};
