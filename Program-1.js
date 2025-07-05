const readline = require('readline');
class Calculator {
    constructor(a, b, opperation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.opperation = opperation.toLowerCase();
    }
    calculate() {
        switch (this.opperation) {
            case 'add':
                return this.a + this.b;
            case 'subtract':
                return this.a - this.b;
            case 'multiply':
                return this.a * this.b;
            case 'divide':
                if (this.b === 0) {
                    return 'Error: Division by zero';
                }
                return this.a / this.b;
            default:
                return 'Error: Invalid operation';
        }
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter first number (a): ', (a) => {
    rl.question('Enter second number (b): ', (b) => {
            rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
            const calc = new Calculator(a, b, operation);
            console.log('Result:', calc.calculate());
            rl.close();
        });
    });
});