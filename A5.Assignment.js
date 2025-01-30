console.log("A5_Assignment")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

const moviesData = [
    {
        name: "Kabhi Khushi Kabhi Gham",
        genre: "Drama",
        boxOffice: 500,
        satelliteRights: 120,
        ottRights: 70,
        musicRights: 20
    },
    {
        name: "Dilwale Dulhania Le Jayenge",
        genre: "Romance",
        boxOffice: 550,
        satelliteRights: 130,
        ottRights: 80,
        musicRights: 25
    },
    {
        name: "3 Idiots",
        genre: "Comedy",
        boxOffice: 600,
        satelliteRights: 140,
        ottRights: 90,
        musicRights: 30
    },
    {
        name: "Bajrangi Bhaijaan",
        genre: "Action",
        boxOffice: 700,
        satelliteRights: 160,
        ottRights: 100,
        musicRights: 40
    },
    {
        name: "Padmaavat",
        genre: "Historical",
        boxOffice: 800,
        satelliteRights: 180,
        ottRights: 110,
        musicRights: 45
    }
]

console.log(moviesData)

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

let totalCostForEachMovie = 0
for(let i = 0; i < moviesData.length; i++){
    totalCostForEachMovie = moviesData[i].boxOffice + moviesData[i].satelliteRights + moviesData[i].ottRights + moviesData[i].musicRights
    moviesData[i].totalCost = totalCostForEachMovie
}

console.log(moviesData)

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

function printMovieCostCard(moviesData){
    let card = "===== Movie Cost Card =====" + "\n"
for(let i = 0; i < moviesData.length; i++){
    card += "Name: " + moviesData[i].name + "\n"
    card += "Genre: " + moviesData[i].genre + "\n"
    card += "Total Cost: " + moviesData[i].totalCost + "\n"
    card += "------\n"

 }
return card

}

console.log(printMovieCostCard(moviesData))

console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

function getMostExpensiveMovie(data){
    let expensiveMovie = data[0]
    for(let i = 0; i < data.length; i++){
        if(data[i].totalCost > expensiveMovie.totalCost){
            expensiveMovie = data[i]
        }
    }
    return expensiveMovie
}

function calculateTotalCostOfAllMovies(data){
    let totalMovieCost = 0
    for(let i = 0; i < moviesData.length; i++){
        totalMovieCost = totalMovieCost + data[i].totalCost
    }
    return totalMovieCost
}

function calculateEachExpenseAverage(data, expenseType){
    let totalExpenseType = 0
    for(let i = 0; i < data.length; i++){
        totalExpenseType = totalExpenseType + data[i][expenseType]
    }
    return totalExpenseType / data.length
}


function generateMovieReport(moviesData){
    let costliestMovie = getMostExpensiveMovie(moviesData)
    let totalCostOfMovies = calculateTotalCostOfAllMovies(moviesData)
    let boxOfficeAverage = calculateEachExpenseAverage(moviesData, "boxOffice")
    let satelliteRightsAverage = calculateEachExpenseAverage(moviesData, "satelliteRights")
    let ottRightsAverage = calculateEachExpenseAverage(moviesData, "ottRights")
    let musicRightsAverage = calculateEachExpenseAverage(moviesData, "musicRights")

    let report = "====== Movie Report =====" + "\n"
    report += "Most Expensive Movie" + "\n"
    report += "------\n"
    report += "Name: " + costliestMovie.name + "\n"
    report += "Genre: " + costliestMovie.genre + "\n"
    report += "Total Cost: " + costliestMovie.totalCost + "\n\n"
    report += "Movies Average" + "\n"
    report += "------\n"
    report += "Total Cost of All Movies: " + totalCostOfMovies + "\n"
    report += "Total Average Cost of All Movies: " + totalCostOfMovies / moviesData.length + "\n"
    report += "------\n"
    report += "Total Box Office Average: " + boxOfficeAverage + "\n"
    report += "Total Satellite Rights Average: " + satelliteRightsAverage + "\n"
    report += "Total OTT Average: " + ottRightsAverage + "\n"
    report += "Total Music Rights Average: " + musicRightsAverage + "\n"


    return report
}

console.log(generateMovieReport(moviesData))