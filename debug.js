// Using console.log() effectively to find bugs easier
let a = 5;
let b = 1;
a++;
console.log(a); //This log is added to ensure the value of a is correct

let sumAB = a + b;
console.log(sumAB);

// typeof to check the type of a variable
// Quick tip JSON = JavaScript Object Notation
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

// Catching misspelled variable and function names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
// For this I manually found misspelled names of variables and fixed them

// Catch unclosed parentheses, brackets, braces, and quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
// Similar to previous I manually found missing brackets and braces

// Catching mixed usage of single/ double quotes "" ''
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//  Catch use of assignment operator instead of equality operator (== instead of =)
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// Catch missing open and closing parenthesis after a function call
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine(); // = getNine is equal to function, = getNine() is equal to number
  console.log(result);

//