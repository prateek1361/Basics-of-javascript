console.log("A5.4_HW2")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

function averageOfNumbersuptoN(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum = sum + i
        average = sum / n
    }
    return average
}

console.log("The average of numbers from 1 to 10:", averageOfNumbersuptoN(10))

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

function  sumOfNumbersGreaterThanSixUpToN(n){
    let sumOfNumberGreaterThanSix = 0
    for(let i = 1; i <= n; i++){
        if(i > 6){
            sumOfNumberGreaterThanSix = sumOfNumberGreaterThanSix + i
        }
    }
    return sumOfNumberGreaterThanSix
}

console.log("The sum of numbers is:", sumOfNumbersGreaterThanSixUpToN(12))

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

function sumDivisibleByEightUpToN(n){
    let result = 0
    for(let i = 10; i <= n; i++){
        if(i % 8 === 0){
            result = result + i
        }
    }
    console.log(result)
}

sumDivisibleByEightUpToN(40)

console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

function  sumEvenAndOddUpToN(n){
    let sumOfEvenNumbers = 0
    let sumOfOddNumbers = 0
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            sumOfEvenNumbers = sumOfEvenNumbers + i
        }else{
            sumOfOddNumbers = sumOfOddNumbers + i
        }
    }
    console.log("Sum of Even Numbers:", sumOfEvenNumbers)
    console.log("Sum of Odd Numbers:", sumOfOddNumbers)
}

sumEvenAndOddUpToN(30)