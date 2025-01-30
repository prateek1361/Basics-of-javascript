console.log("A5.6_HW1");
console.log("---- ---- ----");

const viratKohliRuns = [82, 120, 45, 66, 102, 55, 91, 76, 115, 42];

console.log("1.1");

console.log("Runs scored divisible by 3");
for (let i = 0; i < viratKohliRuns.length; i++) {
    if (viratKohliRuns[i] % 3 === 0) {
        console.log(viratKohliRuns[i]);
    }
}

console.log("---- ---- ----");
console.log("1.2");

console.log("Runs scored divisible by 5");
for (let i = 0; i < viratKohliRuns.length; i++) {
    if (viratKohliRuns[i] % 5 === 0) {
        console.log(viratKohliRuns[i]);
    }
}

console.log("---- ---- ----");
console.log("1.3");

let newArray = [];
for (let i = 0; i < viratKohliRuns.length; i++) {
    if (viratKohliRuns[i] % 2 === 0) {
        newArray.push(viratKohliRuns[i]);
    }
}

console.log("Runs scored divisible by 2:", newArray);

console.log("---- ---- ----");
console.log("1.4");

let sum = 0;
for (let i = 0; i < viratKohliRuns.length; i++) {
    sum = sum + viratKohliRuns[i];
}

console.log("Total runs scored by Virat Kohli:", sum);

console.log("---- ---- ----");
console.log("1.5");

let sumOfOdd = 0;
let sumOfEven = 0;

for (let i = 0; i < viratKohliRuns.length; i++) {
    if (viratKohliRuns[i] % 2 !== 0) {
        sumOfOdd = sumOfOdd + viratKohliRuns[i];
    }
    if (viratKohliRuns[i] % 2 === 0) {
        sumOfEven = sumOfEven + viratKohliRuns[i];
    }
}

console.log("Sum of odd runs scored:", sumOfOdd);
console.log("Sum of even runs scored:", sumOfEven);
