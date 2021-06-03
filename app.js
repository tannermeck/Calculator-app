// import functions

// reference needed DOM elements
const addXInput = document.getElementById("add-x-input");
const addYInput = document.getElementById("add-y-input");
const addButton = document.getElementById("add-button");
const addResult = document.getElementById("add-result");

console.log(addXInput, addYInput, addButton, addResult);




// set event listeners 
addButton.addEventListener('click', () => {
  console.log('add button clicked');
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
