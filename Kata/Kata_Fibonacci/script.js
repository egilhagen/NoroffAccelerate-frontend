function fibonacciKata(limit) {
    let sum = 0;
    let previousNumber = 1;
    let currentNumber = 2;
    let counter = 0;

    while (currentNumber <= limit) {
        if (currentNumber % 2 == 0) {
            sum += currentNumber;
            console.log("Sum: " + sum);
            counter ++;
            console.log("Round: " + counter);
        }

        const nextNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
        console.log(nextNumber);
    }
    return sum;
}

console.log(fibonacciKata(4000000));

