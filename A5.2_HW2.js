console.log("A5.2_HW2")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")
console.log("---- ---- ----")

for(let i = 30; i >= 11; i--){
    console.log(i)
}

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

for(let i = 15; i >= 1; i--){
    let result = 9 * i
    console.log(9 + " * " + i + " = " + result)
}

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

for(let i = 50; i >= 5; i -= 5){
    console.log(i)
}

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
console.log("---- ---- ----")

function printNumbers(n){
    for(let i = 1; i <= n; i++){
        if(i % 8 === 0){
            console.log(i)
        }
    }
}

printNumbers(30)

console.log("---- ---- ----")
console.log("2.2")
console.log("---- ---- ----")

function printOddNumbers(n){
    for(let i = 5; i <= n; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

printOddNumbers(15)

console.log("---- ---- ----")
console.log("2.3")
console.log("---- ---- ----")

function printNumbersDivisibleBy5And7(n){
    for(let i = 1; i <= n; i++){
        if(i % 5 === 0 && i % 7 === 0){
            console.log(i)
        }
    }
}

printNumbersDivisibleBy5And7(50)