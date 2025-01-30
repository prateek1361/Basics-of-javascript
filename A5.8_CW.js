console.log("A5.8_CW")
console.log("---- ---- ----")

console.log("Exercise 1")
console.log("---- ---- ----")

const car = {
    brand: "Toyota",
    model: "Corolla"
}

console.log("1.1")
console.log(car.brand)

console.log("---- ---- ----")
console.log("1.2")

console.log(car.model)

console.log("---- ---- ----")
console.log("1.3")

car.brand = "Honda"

console.log("---- ---- ----")
console.log("1.4")

console.log("Updated Car:", car)

console.log("---- ---- ----")
console.log("1.5")

car.year = 2022
car.color = "Blue"

console.log("---- ---- ----")
console.log("1.6")

console.log("All properties of car object:")

for(property in car){
    console.log(property + ": " + car[property])
}

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

const citizen = {
    name: "Ramesh Kumar",
    age: 65,
    occupation: "Retired"
}

console.log("2.1")
citizen.age = 68

console.log("New age:", citizen.age)

console.log("---- ---- ----")
console.log("2.2")

citizen.age = citizen.age + 2
console.log("Updated Age:", citizen.age)

console.log("---- ---- ----")
console.log("2.3")

citizen.city = "Delhi"

for(const property in citizen){
    console.log(property + ": " + citizen[property])
}