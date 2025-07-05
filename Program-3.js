const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const generateSeries = (n) => {
    const res = [];
    if (n % 2 === 0) {
        n--;
    }
    for (let i = 0; i < n; i++) {
        res.push(2 * i + 1);
    }
    return res;
}
rl.question('Enter number of terms (x): ', (x) => {
    console.log(generateSeries(parseInt(x)));
    rl.close();
});