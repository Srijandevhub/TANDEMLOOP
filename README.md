Coding Language: JavaScript

Problem 1:
// Import the readline module for getting user input from the command line
const readline = require('readline');

// Define the Calculator class
class Calculator {
    constructor(a, b, opperation) {
        // Convert input values to floating-point numbers
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.opperation = opperation.toLowerCase(); // Normalize the operation to lowercase
    }

    // Method to perform the selected operation
    calculate() {
        switch (this.opperation) {
            case 'add':
                return this.a + this.b;
            case 'subtract':
                return this.a - this.b;
            case 'multiply':
                return this.a * this.b;
            case 'divide':
                // Handle division by zero error
                if (this.b === 0) {
                    return 'Error: Division by zero';
                }
                return this.a / this.b;
            default:
                return 'Error: Invalid operation'; // Handle invalid operation input
        }
    }
}

// Create a readline interface to take input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for first number
rl.question('Enter first number (a): ', (a) => {
    // Ask user for second number
    rl.question('Enter second number (b): ', (b) => {
        // Ask user for type of operation
        rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
            // Create Calculator instance with user inputs
            const calc = new Calculator(a, b, operation);

            // Display the result of the calculation
            console.log('Result:', calc.calculate());

            // Close the readline interface
            rl.close();
        });
    });
});

Problem 2:
// Import the readline module to read input from the console
const readline = require('readline');

// Create a readline interface for input and output through the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate a series of the first 'n' odd numbers
const generateSeries = (n) => {
    const res = []; // Initialize empty result array
    for (let i = 0; i < n; i++) {
        res.push(2 * i + 1); // Formula for nth odd number: 2*i + 1
    }
    return res; // Return the array of odd numbers
}

// Ask user for the number of terms in the series
rl.question('Enter number of terms (x): ', (x) => {
    const num = parseInt(x); // Convert input to integer
    console.log(generateSeries(num)); // Print the generated odd number series
    rl.close(); // Close the input interface
});

Problem 3:
// Import the readline module to take user input from the terminal
const readline = require('readline');

// Create readline interface to handle standard input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate a series of odd numbers
const generateSeries = (n) => {
    const res = []; // Initialize empty array to store the series

    // If the number is even, reduce it by 1 to make it odd
    // This ensures the loop runs for an odd number of terms
    if (n % 2 === 0) {
        n--;
    }

    // Generate the first 'n' odd numbers using the formula 2*i + 1
    for (let i = 0; i < n; i++) {
        res.push(2 * i + 1);
    }

    return res; // Return the generated series
}

// Ask the user to input the number of terms
rl.question('Enter number of terms (x): ', (x) => {
    const num = parseInt(x); // Convert the input to an integer
    console.log(generateSeries(num)); // Generate and display the series
    rl.close(); // Close the readline interface
});