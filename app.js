// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { divide } from './calculations.js';
import { multiply } from './calculations.js';
import { square } from './calculations.js';




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

const divideXInput = document.getElementById("divide-x-input");
const divideYInput = document.getElementById("divide-y-input");
const divideButton = document.getElementById("divide-button");
const divideResult = document.getElementById("divide-result");

const multiplyXInput = document.getElementById("multiply-x-input");
const multiplyYInput = document.getElementById("multiply-y-input");
const multiplyButton = document.getElementById("multiply-button");
const multiplyResult = document.getElementById("multiply-result");

const InputA = document.getElementById("input-a");
const InputB = document.getElementById("input-b");
const squareButton = document.getElementById("square-button");
const squareResult = document.getElementById("square-result");

console.log(addXInput, addYInput, addButton, addResult);

console.log(subtractXInput, subtractYInput, subtractButton, subtractResult);

console.log(divideXInput, divideYInput, divideButton, divideResult);

console.log(multiplyXInput, multiplyYInput, multiplyButton, multiplyResult);

console.log(InputA, InputB, squareButton, squareResult);



// set event listeners 
addButton.addEventListener('click', () => {
    const x = Number(addXInput.value);
    const y = Number(addYInput.value);
    const sum = add(x, y)
    console.log(sum);
    addResult.textContent = sum;
});

subtractButton.addEventListener('click', () => {
    const x = Number(subtractXInput.value);
    const y = Number(subtractYInput.value);
    const sub = subtract(x, y)
    console.log(sub)
    subtractResult.textContent = sub;

})
divideButton.addEventListener('click', () => {
    const x = Number(divideXInput.value);
    const y = Number(divideYInput.value);
    const div = divide(x, y);
    console.log(div);
    divideResult.textContent = div;

})
multiplyButton.addEventListener('click', () => {
    const x = Number(multiplyXInput.value);
    const y = Number(multiplyYInput.value)
    const mult = multiply(x, y);
    console.log(mult);
    multiplyResult.textContent = mult;

})
squareButton.addEventListener('click', () => {
    const x = Number(InputA.value);
    const y = Number(InputB.value);
    const sq = square(x, y);
    console.log(sq);
    squareResult.textContent = sq;

})
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
