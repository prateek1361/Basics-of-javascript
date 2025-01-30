console.log("A5.4_CW")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

function sumUpToN(n){
   let sum = 0
   for(let i = 1; i <= n; i++){
    sum = sum + i
   } 
   return sum
}

console.log(sumUpToN(5))

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

function sumOfOddNumbersUpToN(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        if(i % 2 !== 0){
            sum = sum + i
        }
    }
    return sum
}

console.log(sumOfOddNumbersUpToN(7))

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

function sumDivisibleByThreeAndSevenUpToN(n){
    let sumOfNumbersDivisibleByThree = 0
    let sumOfNumbersDivisibleBySeven = 0
    for(let i = 1; i <= n; i++){
        if( i % 3 === 0){
            sumOfNumbersDivisibleByThree = sumOfNumbersDivisibleByThree + i
        }
        if(i % 7 === 0){
            sumOfNumbersDivisibleBySeven = sumOfNumbersDivisibleBySeven + i
        }
    }
    console.log("Sum of numbersdivisible by 3:", sumOfNumbersDivisibleByThree)
    console.log("Sum of numbers divisible by 7:", sumOfNumbersDivisibleBySeven)
}

sumDivisibleByThreeAndSevenUpToN(21)

console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

function factorial(n){
    let result = 1
    for(let i = 1; i <= n; i++){
        result = result * i
    }
    return result
}

console.log(factorial(5))
