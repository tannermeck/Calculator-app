// import functions
import { add } from './calculations.js';

console.log(add);

// reference needed DOM elements
const addXInput = document.getElementById("add-x-input");
const addYInput = document.getElementById("add-y-input");
const addButton = document.getElementById("add-button");
const addResult = document.getElementById("add-result");

const subtractXInput = document.getElementById("subtract-x-input");
const subtractYInput = document.getElementById("subtract-y-input");
const subtractButton = document.getElementById("subtract-button");
const subtractResult = document.getElementById("subtract-result");

console.log(addXInput, addYInput, addButton, addResult);

console.log(subtractXInput, subtractYInput, subtractButton, subtractResult);



// set event listeners 
addButton.addEventListener('click', () => {
    const x = Number(addXInput.value);
    const y = Number(addYInput.value);
    const sum = add(x, y)
    console.log(sum);
    addResult.textContent = sum;
});

subtractButton.addEventListener('click', () => {
  
})
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
