console.log("A5.12_HW2")
console.log("---- ---- ----")

const productsData = [
    { id: 101, name: "Laptop", price: 999.99, brand: "Dell", category: "Electronics", rating: 4.5 },
    { id: 102, name: "Smartphone", price: 599.99, brand: "Samsung", category: "Electronics", rating: 4.0 },
    { id: 103, name: "Running Shoes", price: 79.99, brand: "Nike", category: "Footwear", rating: 4.8 },
    { id: 104, name: "T-shirt", price: 19.99, brand: "Adidas", category: "Apparel", rating: 4.2 },
    { id: 105, name: "Coffee Maker", price: 49.99, brand: "Hamilton", category: "Kitchen Appliances", rating: 4.6 }
   ];

   function getCostliestProduct(data){
    let mostExpensiveProduct = data[0]
    for(let i = 0; i < data.length; i++){
    if(data[i].price > mostExpensiveProduct.price){
        mostExpensiveProduct = data[i]
      }
    }
    return mostExpensiveProduct
   }

   function getElectronicsProduct(data){
    let count = 0
    for(let i = 0; i < data.length; i++){
        if(data[i].category === "Electronics"){
            count = count + 1
        }
    }
    return count
   }

   function getAveragePrice(data){
     let totalPrice = 0
     for(let i = 0; i < data.length; i++){
        totalPrice = totalPrice + data[i].price
        avgPrice = totalPrice / data.length
     }
     return avgPrice
   }

   function getAverageRating(data){
    let totalRating = 0
    for(let i = 0; i < data.length; i++){
        totalRating = totalRating + data[i].rating
        avgRating = totalRating / data.length
    }
    return avgRating
   }

   function getHighestRatedProduct(data){
    let highestRated = data[0]
    for(let i = 0; i < data.length; i++){
        if(data[i].rating > highestRated.rating){
            highestRated = data[i]
        }
    }
    return highestRated
   }

   function getProductsUnder50(data){
    let productLessThan50 = []
    for(let i = 0; i < data.length; i++){
        if(data[i].price < 50){
            productLessThan50.push(data[i])
        }
    }
    return productLessThan50
   }


   function generateProductReport(productsData){
    let costliestProduct = getCostliestProduct(productsData)
    let electronicsProductCount = getElectronicsProduct(productsData)
    let averagePrice = getAveragePrice(productsData)
    let averageRating = getAverageRating(productsData)
    let highestRatedProduct = getHighestRatedProduct(productsData)
    let productsUnder50 = getProductsUnder50(productsData)

    let report = "====== Product Analysis ======" + "\n"
    report += "Most Expensive Product Details" + "\n"
    report += "------\n"
    report += "Name: " + costliestProduct.name + "\n"
    report += "Price: $" + costliestProduct.price +"\n"
    report += "Brand: " + costliestProduct.brand + "\n"
    report += "Category: " + costliestProduct.category + "\n"
    report += "Rating: " + costliestProduct.rating + "\n"
    report += "---- ---- ----\n\n"
    report += "Total and Averages" + "\n"
    report += "------\n"
    report += "Total Electronics Products: " + electronicsProductCount +"\n"
    report += "Average Pricing: $" + averagePrice + "\n"
    report += "Average Rating: " + averageRating + "\n"
    report += "---- ---- ----\n\n"
    report += "Products with Highest Rating" + "\n"
    report += "------\n"
    report += "Name: " + highestRatedProduct.name + "\n"
    report += "Price: $" + highestRatedProduct.price +"\n"
    report += "Brand: " + highestRatedProduct.brand + "\n"
    report += "Category: " + highestRatedProduct.category + "\n"
    report += "Rating: " + highestRatedProduct.rating + "\n"
    report += "---- ---- ----\n\n"
    report += "Product with Price Less than $50" + "\n"
    report += "------\n"
    for(let i = 0; i < productsUnder50.length; i++){
        report += "Name: " + productsUnder50[i].name + "\n"
        report += "Price: $" + productsUnder50[i].price + "\n";
        report += "Brand: " + productsUnder50[i].brand + "\n";
        report += "Category: " + productsUnder50[i].category + "\n";
        report += "Rating: " + productsUnder50[i].rating + "\n---\n";
    }


    return report
   }

   console.log(generateProductReport(productsData))
