console.log("A4.3_Assignment")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

let product1 = "Laptop"
let price1 = 999
let category1 = "Electronics"
let product2 = "Running Shoes"
let price2 = 799
let category2 = "Footwear"
let product3 = "T-Shirt"
let price3 = 199
let category3 = "clothing"

function getTotalPrice(price1, price2, price3){
    return price1 + price2 + price3
}

console.log("Total Price: $" + getTotalPrice(price1, price2, price3))

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

let discountRate = 0.1

function calculateDiscount(price1, discountRate){
    let discountAmount = price1 * discountRate

    return price1 - discountAmount
}

let price1AfterDiscount = calculateDiscount(price1, discountRate)
console.log("Final Price Of Laptop: $" + price1AfterDiscount)

let finalTotalPrice = price1AfterDiscount + price2 + price3

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

let cartSummary = "===== Cart Summary =====" + "\n\n\n" + "Product 1: " + product1 + "\n" + "Price of Product 1: $" + price1 + "\n" + "Discount: " + discountRate + "\n" + "Final Price of Product 1: $" + price1AfterDiscount + "\n\n" + "Product 2: " + product2 + "\n" + "Price of Product 2: $" + price2 + "\n" + "Discount: " + 0 + "\n" + "Final Price of Product 2: $" + price2 + "\n\n" + "Product 3: " + product3 + "\n" + "Price of Product 3: $" + price3 + "\n" + "Discount: " + 0 + "\n" + "Final Price of Product 1: $" + price3 + "\n\n" + "Total Cart Price: $" + finalTotalPrice

console.log(cartSummary)