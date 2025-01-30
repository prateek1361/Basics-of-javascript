console.log("A4.2_HW1")
console.log("---- ---- ----")

console.log("1.1")
function checkAge(age){
    if(age >= 18){
        console.log("you are eligible for voting.")
    }
}

checkAge(21)

console.log("---- ---- ----")

console.log("1.2")
function compareNumbers(num1, num2){
    if(num1 >= num2){
        console.log(num1 + " is greater than " + num2)
    }else{
        console.log(num2 + " is greater than " + num1)
    }
}

compareNumbers(10, 5)

console.log("---- ---- ----")

console.log("1.3")
function calculateShippingCost(totalWeight, country, baseCost){
    if(totalWeight <= 1 && country === "Local"){
        return baseCost = baseCost + 10
    }else if(totalWeight > 1 && country === "International"){
        return baseCost = baseCost + 20
    }else{
        return baseCost
    }
}
 let weight = 0.5
 let country = "Local"
 let cost = 50

 console.log("The updated shipping cost is:", calculateShippingCost(weight, country, cost))