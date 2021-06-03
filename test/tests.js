// IMPORT MODULES under test here:
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
import { divide } from '../calculations.js';
import { multiply } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtracts two numbers', (expect) => {
    const expected = 1;
    const actual = subtract(5, 4);
    expect.equal(expected, actual);
})

test('divide two numbers', (expect) => {
    const expected = 3;
    const actual = divide(9, 3);
    expect.equal(expected, actual);
})
test('multiply two number', (expect) => {
    const expected = 6;
    const actual = multiply(3, 2)
    expect.equal(expected, actual);
})