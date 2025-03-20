document.addEventListener("DOMContentLoaded", () => {
  // Get references to the input and output elements
  const firstInput = document.getElementById("First-input1");
  const secondInput = document.getElementById("Second-input2");
  const operatorInput = document.getElementById("Inc-dec-input");
  const outputDisplay = document.getElementById("output-display");

  // Function to generate the sequence based on the inputs
  function generateSequence() {
    // Parse the input values
    const start = Number(firstInput.value);
    const end = Number(secondInput.value);
    const op = operatorInput.value.trim();

    // Validate the number inputs
    if (isNaN(start) || isNaN(end)) {
      outputDisplay.textContent =
        "Please enter valid numbers in the first two inputs.";
      return;
    }

    let sequence = [];

    if (op === "1") {
      // For decrement: ensure start is greater than end
      if (start <= end) {
        outputDisplay.textContent =
          "For decrement, the first input must be greater than the second.";
        return;
      }
      // Generate sequence from start down to (but not including) end
      for (let i = start; i > end; i--) {
        sequence.push(i);
      }
    } else if (op === "2") {
      // For increment: ensure start is less than end
      if (start >= end) {
        outputDisplay.textContent =
          "For increment, the first input must be less than the second.";
        return;
      }
      // Generate sequence from start up to end (inclusive)
      for (let i = start; i <= end; i++) {
        sequence.push(i);
      }
    } else {
      outputDisplay.textContent =
        "Invalid operator. Enter '1' for decrement or '2' for increment.";
      return;
    }

    // Display the generated sequence
    outputDisplay.textContent = sequence.join(", ");
  }

  // Listen for changes in the Inc-dec-input field
  operatorInput.addEventListener("change", generateSequence);
});
