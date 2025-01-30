console.log("A5.7_HW1")
console.log("---- ---- ----")

const numbersArray = [33, 57, 24, 49, 52, 66];

console.log("1.1")
function printOriginalArray(){
    console.log("Original Array:", numbersArray)
}

printOriginalArray()

console.log("---- ---- ----")
console.log("1.2")
function divideNumbersByThree(numbers){
    let newArray = []
    for(let i = 0; i < numbers.length; i++){
        newArray.push(numbers[i] / 3)
    }
    return newArray
}

console.log("Array with Numbers Divided by 3:", divideNumbersByThree(numbersArray))

console.log("---- ---- ----")
console.log("1.3")
function findNumInArray(numbers , searchNum){
    for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === searchNum){
        return true
    }else{
        return false
    }
 }
}

console.log("Num: 24", findNumInArray(numbersArray, 24))

console.log("---- ---- ----")
console.log("1.4")
function findLargestNumberDivisibleBy5(numbers){
    let largestNumber = numbers[0]
    for(let i = 1; i< numbers.length; i++){
        if(numbers[i] > largestNumber){
            largestNumber = numbers[i]
        }
        if(largestNumber % 5 === 0 ){
            return largestNumber
        } else{
            return 0
        }
    }
}

console.log("Largest Number Divisible by 5:", findLargestNumberDivisibleBy5(numbersArray))