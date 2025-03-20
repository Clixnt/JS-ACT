let off = document.getElementById("off")
let on = document.getElementById("on")
let LightBulb = document.getElementById("LightBulb")

off.onclick = function () {
  LightBulb.src = `Bulb-off.gif`
}
on.onclick = function () {
  LightBulb.src = `Bulb-on.gif`
}

// function offbulb() {
//     document.getElementById("LightBulb").src = "Bulb-on.gif";
// }
// function onbulb() {
//     document.getElementById("lightbulb").src = "Bulb-on.gif";
// }
