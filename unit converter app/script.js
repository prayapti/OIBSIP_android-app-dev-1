function convert() {
  const type = document.getElementById("type").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const result = document.getElementById("result");

  if (isNaN(inputValue)) {
    result.innerText = "Please enter a valid number!";
    return;
  }

  let output;

  if (type === "length") {
    // Convert cm <-> m
    if (inputValue >= 100) {
      output = `${inputValue / 100} meters`;
    } else {
      output = `${inputValue * 100} centimeters`;
    }
  } else if (type === "weight") {
    // Convert g <-> kg
    if (inputValue >= 1000) {
      output = `${inputValue / 1000} kilograms`;
    } else {
      output = `${inputValue * 1000} grams`;
    }
  }

  result.innerText = `Converted Value: ${output}`;
}
