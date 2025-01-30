console.log("A5.3_HW1");
console.log("---- ---- ----");
console.log("Exercise 1");
console.log("---- ---- ----");
console.log("1.1");
console.log("---- ---- ----");

function printAllNumbers(n, m) {
    let output = "";
    for (let i = 1; i <= n; i++) {
        output = output + i;
        if (i % m === 0) {
            output = output + "-";
        }
    }
    console.log(output);
}

printAllNumbers(9, 4);

console.log("---- ---- ----");
console.log("1.2");
console.log("---- ---- ----");

function printDivisibleAndNotDivisible(n, m) {
    let divisibleNumbers = "";
    let notDivisibleNumbers = "";
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            divisibleNumbers = divisibleNumbers + " " + i;
        } else {
            notDivisibleNumbers = notDivisibleNumbers + " " + i;
        }
    }
    console.log("Divisible by 6:", divisibleNumbers);
    console.log("Not divisible by 6:", notDivisibleNumbers);
}

printDivisibleAndNotDivisible(20, 6);

console.log("---- ---- ----");
console.log("1.3");
console.log("---- ---- ----");

function printDivisibleNumbersBetween(p, n, m) {
    if (p < n < m) {
        for (let i = n; i <= m; i++) {
            if (i % p === 0) {
                console.log(i);
            }
        }
    }
}

printDivisibleNumbersBetween(3, 5, 15);
