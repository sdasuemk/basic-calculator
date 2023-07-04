console.log("Hello world!");

const btn = document.querySelectorAll("button");
console.log("Check", btn);
btn.forEach(function(button) {
    button.addEventListener("click", myFunction);
  });
  function myFunction(event) {
    const clickedButtonValue = event.target.innerHTML;
    const displayElement = document.getElementById("display-btn-value");
    const currentDisplayValue = displayElement.innerHTML;
    const displayResult = document.getElementById("display-result");
  
    if (clickedButtonValue === "=") {
      // Perform the calculation if the "=" button is clicked
      const result = eval(currentDisplayValue);
      displayResult.innerHTML = "Equal to: " + result;
    } else if (clickedButtonValue === "C") {
      // Clear the display if the "C" button is clicked
      displayElement.innerHTML = "";
      displayResult.innerHTML = ""
    } else {
      // Concatenate the clicked button's value with the current display value
      displayElement.innerHTML = currentDisplayValue + clickedButtonValue;
    }
  }

