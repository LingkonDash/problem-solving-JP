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

// ------------------------------------------

// Problem 2: Check Even or Odd 
// Input: 4  → Output: true Input: 7  → Output: false; isEven check

const isEven = (num) => !(num % 2);

// console.log(isEven(7));

// ------------------------------------------

// Problem 3: Find the Largest of Three Numbers
// input: 3, 7, 5  → Output: 7

const findMax = (...numbers) => (Math.max(...numbers))

// console.log(findMax(3,7,5));

// ------------------------------------------

// Problem 4:  Celsius to Fahrenheit
// Input: 0   → Output: 32Input: 100 → Output: 212

const celsiusToFahrenheit = (c) => (c * 9/5) + 32

// console.log(celsiusToFahrenheit(0));

// ------------------------------------------

// Problem 5: Check Positive, Negative or Zero
// Input: -5  → Output: 'negative' Input: 0   → Output: 'zero'

const checkPositiveOrNegative = (num) => num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';

// console.log(checkPositiveOrNegative(0));

// ------------------------------------------

// Problem 6: Reverse a String
// Input: 'hello' → Output: 'olleh' Input: 'world' → Output: 'dlrow'

const reverseString = (str) => str.split('').reverse().join('');

// console.log(reverseString('hello'));

// ------------------------------------------

// Problem 7: Count Vowels in a String 
// Input: 'hello' → Output: 2 Input: 'javascript' → Output: 3

const vowels = 'aeiou'

const countVowels = (str) => {
    let counter = 0;
    for(i = 0; i < str.length; i++) {
        vowels.includes(str[i]) && counter++
    }
    return counter
}

// console.log(countVowels('javascript'));

// ------------------------------------------

// Problem 8: Check Palindrome
// Input: 'racecar' → Output: true Input: 'hello' → Output: false

const checkPalindrome = (str) => str.split('').reverse().join('') === str;

// console.log(checkPalindrome('aba'));

// ------------------------------------------

// Problem 9: Capitalize First Letter of Each Word
// Input: 'hello world' → Output: 'Hello World'

const firstLatterCap = (str) => str.split(' ').map(wrd => wrd[0].toUpperCase() + wrd.slice(1)).join(' ');

// console.log(firstLatterCap('hello world'));

// ------------------------------------------

// Problem 10: Count Occurrences of a Character
// Input: 'banana', 'a' → Output: 3

function occurrencesCounter (str, target) {
    let counter = 0;
    for(const ch of str) {
        ch === target && counter++
    }
    return counter
}
console.log(occurrencesCounter('banana', 'a'));
