// Get the canvas element
const canvas = document.getElementById("mojoCanvas");
const ctx = canvas.getContext("2d");

// Set the ball's initial position and velocity
let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 35;
let dx = 18;
let dy = 25;

// Define the game loop
function drawBall() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "orangered";
  ctx.fill();
  ctx.closePath();

  // Update the ball's position
  x += dx;
  y += dy;

  // Check for collisions with the walls
  if (x + dx > canvas.width - radius || x + dx < radius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - radius || y + dy < radius) {
    dy = -dy;1
  }

  // Request the next frame
 requestAnimationFrame(drawBall)
}

// Start the game loop
drawBall();
