// Directs to another html when press 1-6 in input
function changeIt() {
  const input = document.getElementById("NumberInput").value;

  switch (input) {
    case "1":
      window.location.href = "Web/Calculator 3.0/index.html";
      break;

    case "2":
      window.location.href = "Web/Game/index.html";
      break;

    case "3":
      window.location.href = "Web/grade/Grade.html";
      break;

    case "4":
      window.location.href = "Web/StringLength/index.html";
      break;

    case "5":
      window.location.href = "Web/Letter/ifleseABCD.html";
      break;
    case "6":
      window.location.href = "Web/Exit/exit.html";
      break;

    default:
      window.alert("Invalid choice. Please try again.");
  }
}

// Change to Light-theme/Dark-theme
const logo = document.getElementById("sandbox");

logo.onclick = function () {
  document.body.classList.toggle("dark-theme");
};

// Press enter on keyboard instead of pressing on submit button 
var input = document.getElementById("NumberInput");
var Cbutton = document.getElementById("ButtonBB"); 

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    Cbutton.click();
  }
});