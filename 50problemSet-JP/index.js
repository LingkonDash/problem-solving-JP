// Day 1:

// Problem 1: Swap Two Variables
// Input: a = 5, b = 10 Output: a = 10, b = 5 without using 3rd variable.

let a = 5;
let b = 10;

// solution using destructuring.
// [a, b] = [b, a] 

// solution using arithmetics

a = a + b; // a = 15, b = 10
b = a - b; // a = 15, b = 5
a = a - b; // a = 10, b = 5

// console.log(a, b);


// Problem 2: Check Even or Odd 
// Input: 4  → Output: true Input: 7  → Output: false; isEven check

const isEven = (num) => !(num % 2);

// console.log(isEven(7));

// Problem 3: Find the Largest of Three Numbers
// input: 3, 7, 5  → Output: 7

const findMax = (...numbers) => (Math.max(...numbers))

// console.log(findMax(3,7,5));

// Problem 4:  Celsius to Fahrenheit
// Input: 0   → Output: 32Input: 100 → Output: 212

const celsiusToFahrenheit = (c) => (c * 9/5) + 32

// console.log(celsiusToFahrenheit(0));

// Problem 5: Check Positive, Negative or Zero
// Input: -5  → Output: 'negative' Input: 0   → Output: 'zero'

const checkPositiveOrNegative = (num) => num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';

// console.log(checkPositiveOrNegative(0));


