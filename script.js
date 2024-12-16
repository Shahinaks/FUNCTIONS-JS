const sumOfEvens = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
};

let input = prompt("Enter a value for n:");

let n = parseInt(input);

if (!isNaN(n) && n > 0) {
    let result = sumOfEvens(n);
    alert(`The sum of even numbers up to ${n} is ${result}.`);
} else {
    alert("Please enter a valid positive number.");
}
