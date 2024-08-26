// Functions:
//  1. Function Declaration or Normal Function
//  2. Function Expression
//  3. Arrow Function(ES6)
//  4. Immediately Invoked Function Expression (IIFE)
//  5. Anonymous Function
//  6. Higher-order Function
//  7. Callback Function

// 1. Function Declaration (Normal Function)
// Explanation: A function declaration defines a named function using the function keyword. These functions are hoisted, meaning they can be called before they are defined in the code.

// Question:

// Create a function using a function declaration that takes two numbers as arguments and returns their sum. Then, call the function with the numbers 5 and 7 and log the result.

function addNumbers(a,b) {
    return a+b;
}

const result = addNumbers(5,7);
console.log(result);

// 2. Function Expression
// Explanation: A function expression involves creating a function and assigning it to a variable. These functions are not hoisted, so they cannot be called before they are defined.

// Question:

// Write a function expression that multiplies three numbers together. Use this function to add 2, 4, and 6, then print the result to the console.

function multiplyThreeNumbers(a,b,c){
    return a*b*c;
}
const resultM = multiplyThreeNumbers(3,2,4);
console.log(resultM);

// 3. Arrow Function (ES6)
// Explanation: Arrow functions provide a shorter syntax for writing function expressions using the => arrow syntax. They do not have their own this context and are not hoisted.

// Question:

// Create an arrow function that multiplies two numbers and then adds 10 to the result. Use this function with the numbers 3 and 5, and display the output.

const multiplyAndAddTen = (a,b) => (a*b)+10;
const resultArr = multiplyAndAddTen(2,9);
console.log(resultArr);

// 4. Immediately Invoked Function Expression (IIFE)
// Explanation: An IIFE is a function that runs immediately after it is defined. It is commonly used to create a local scope and avoid polluting the global namespace.

// Question:

// Write an IIFE that takes two numbers, subtracts the second from the first, and logs the result immediately. Use the numbers 10 and 4.


(function(a,b){
    const resultIIFE = a-b;
    console.log(resultIIFE);
})(10,4);

// 5. Anonymous Function
// Explanation: An anonymous function is a function without a name.  It is often used in situations where the function does not need to be reused.

// Example:

setTimeout(function(){
    console.log("This will runs after 3 seconds");
}, 3000);

// 6. Higher-Order Function
// A higher-order function is a function that takes another function as an argument or returns a function as a result.

// Example:

function display(name) {
    return function(msg) {
      console.log(msg + ", " + name);
    };
  }
  
  const retFun= display("dhil");
  retFun("Hello");

//   7. Callback Function
// Explanation: A callback function is a function passed into another function as an argument and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations.

// Question:

// Write a function performOperation that takes two numbers and a callback function. The function should perform the callback operation on the numbers and log the result. Use this with a callback that adds the numbers 8 and 2.

function performOperation(a, b, callback){
    const resultAsync = callback(a,b);
    console.log(resultAsync);
}

function add(a, b) {
    return a+b;
}
performOperation(8, 2, add);

// Asynchronous Callback:

// Create a function fetchData that simulates fetching data with a 2-second delay using setTimeout. It should take a callback function that processes the fetched data. Demonstrate this by fetching a number and then doubling it in the callback.

// fetchData simulating an asynchronous operation
function fetchData(callback) {
    setTimeout(() => {
      const data = 5; // Simulated fetched data
      callback(data);
    }, 2000);
  }
  
  // Callback function to process the fetched data
  function processData(data) {
    const resultAsync = data * 2;
    console.log(`Processed Data: ${resultAsync}`);
  }
  
  // Using fetchData with processData callback
  fetchData(processData);
  // After 2 seconds, Output: Processed Data: 10
  
  // LOOPING

//   1. while
//   2. do-while
//   3. for

// 1.Question:

// Write a for loop that calculates the sum of all numbers from 1 to 10. What is the result of the summation?

let sum=0
for(let a=1; a<=10; a++)
{
     sum += a;
}
console.log(sum);

// 2.Question:

// Write a while loop to calculate the sum of all even numbers between 1 and 20. What is the final sum?
let x = 2; 
let sumEven = 0;
while (x <= 20) {
  sumEven = sumEven + x;
  x += 2; 
}
console.log(sumEven);

//  3.Question:

// Write a do...while loop that sums all numbers from 10 to 1 (in reverse order). What will the loop output as the sum?

// Initialize variables
let sumDoWhile = 0;
let i = 10;  // Start with 10

// do...while loop to iterate from 10 down to 1
do {
  sumDoWhile += i;  // Add the current value of i to the sum
  i--;  // Decrement i by 1
} while (i >= 1);  // Continue as long as i is greater than or equal to 1

// Log the result
console.log(`Sum using do...while loop: ${sum}`); 