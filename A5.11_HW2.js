console.log("A5.11_HW2")
console.log("---- ---- ----")

const productsData = [
    {
      id: 1,
      productName: "Laptop",
      price2021: 19999,
      price2022: 18999,
      price2023: 15090,
      brand: "Dell",
      productRating: 5
    },
    {
      id: 2,
      productName: "Smartphone",
      price2021: 18999,
      price2022: 17999,
      price2023: 16999,
      brand: "Samsung",
      productRating: 4
    },
    {
      id: 3,
      productName: "Smartwatch",
      price2021: 36999,
      price2022: 32999,
      price2023: 29999,
      brand: "Apple",
      productRating: 4
    }
  ];

  function printDetailsCardById(id){
    let product = getDetailsById(id)
    console.log("===== Details Card for " + product.productName + " =====" + "\n" + "ID: " + product.id + "\n-----" + "\n" + "Details: " + "\n-----" + "\n" + "Product Name: " + product.productName + "\n" + "Price in 2021: " + product.price2021 + "\n" + "Price in 2022: " + product.price2022 + "\n" + "Price in 2023: " + product.price2023 + "\n" + "Brand: " + product.brand + "\n" + "Rating: " + product.productRating + "\n----- ----- -----" + "\n" )

  }

  function getDetailsById(id){
    for(let i = 0; i < productsData.length; i++){
        if(productsData[i].id === id){
            return productsData[i]
        }
    }
  }

  printDetailsCardById(1)
  printDetailsCardById(2)
  printDetailsCardById(3)


console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

function getProductByMinimumPrice(year, minimumPrice){
    let result = []
    for(let i = 0; i < productsData.length; i++){
        if(productsData[i][year] >= minimumPrice){
            result.push(productsData[i])
        }
    }
    return result
}

console.log("Products with price in 2021 >= 25000")
console.log(getProductByMinimumPrice("price2021", 25000))

console.log("Products with price in 2023 >= 16000")
console.log(getProductByMinimumPrice( "price2023", 16000))


console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

for(let i = 0; i < productsData.length; i++){
    let numberOfPrices = 3
    let totalPrice = productsData[i].price2021 + productsData[i].price2022 + productsData[i].price2023
    productsData[i].totalPrice = totalPrice

    productsData[i].avgprice = productsData[i].totalPrice / numberOfPrices
}

function printProductAboveAverage(cutOff){
    for(let i = 0; i < productsData.length; i++){
        if(productsData[i].avgprice > cutOff){
            console.log("Average price of 3 years for " + productsData[i].productName + " is " + productsData[i].avgprice)
        }
    }
}
printProductAboveAverage(12000)

console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

function getHighestAverageProduct(data){
    let highestAverage = data[0].avgprice
    for(let i = 0; i < data.length; i++){
        if(data[i].avgprice > highestAverage){
            highestAverage = data[i].avgprice
        }
    }
    return highestAverage
}

for(let i = 0; i < productsData.length; i++){
    if(getHighestAverageProduct(productsData) === productsData[i].avgprice){
        console.log(productsData[i])
    }
}
