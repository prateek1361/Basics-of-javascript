console.log("A5_Exercise_1")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

const records = [
    {
        name: "Rajesh",
        location: "Mumbai",
        q1Sales: 120000,
        q2Sales: 145000,
        q3Sales: 130000,
        q4Sales: 155000
    },
    {
        name: "Sneha",
        location: "Delhi",
        q1Sales: 90000,
        q2Sales: 110000,
        q3Sales: 95000,
        q4Sales: 120000
    },
    {
        name: "Arun",
        location: "Chennai",
        q1Sales: 100000,
        q2Sales: 125000,
        q3Sales: 115000,
        q4Sales: 135000
    },
    {
        name: "Kavita",
        location: "Kolkata",
        q1Sales: 85000,
        q2Sales: 95000,
        q3Sales: 88000,
        q4Sales: 105000
    },
    {
        name: "Sanjay",
        location: "Mumbai",
        q1Sales: 110000,
        q2Sales: 135000,
        q3Sales: 120000,
        q4Sales: 140000
    },
    {
        name: "Divya",
        location: "Chennai",
        q1Sales: 95000,
        q2Sales: 120000,
        q3Sales: 110000,
        q4Sales: 130000
    }
]

console.log(records)

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

let numberOfQuaterlySales = 4
for(let i = 0; i < records.length; i++){
    records[i].totalSales = records[i].q1Sales + records[i].q2Sales + records[i].q3Sales + records[i].q4Sales
    records[i].averageSales = records[i].totalSales / numberOfQuaterlySales
    console.log(records[i])
}

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

function getPerformanceGrade(avg){
    if(avg >= 140000) return "Top Performer"
    if(avg >= 120000 && avg < 140000) return "Medium Performer"
    if(avg < 120000) return "Low Performer"
}


function generateSalesReport(records){
    let report = "===== Performance Report =====" + "\n\n" 
    for(let i = 0; i < records.length; i++){

        report += "Name: " + records[i].name + "\n" 
        report += "Location: " + records[i].location + "\n"
         report += "Total Sales: " + records[i].totalSales + "\n"
          report += "Average Sales: " + records[i].averageSales + "\n"
           report += "Performance Grade: " + getPerformanceGrade(records[i].averageSales) + "\n------\n"
    }

    return report
}
console.log(generateSalesReport(records))

console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

function getBestPerformer(data){
    let highestPerformer = data[0]
    for(let i = 0; i < data.length; i++){
        if(data[i].totalSales > highestPerformer){
            highestPerformer = data[i]
        }
    }
    return highestPerformer
}

function getTopPerformersCount(data){
    let count = 0
    for(let i = 0; i < data.length; i++){
        if(data[i].averageSales > 140000){
            count = count + 1
        }
    }
    return count
}

function getQuarterlyAverage(data, quarterly){
    let numberOfSalesIn1Quarter = 6
    let totalQuarterlyEarnings = 0
    for(let i = 0; i < data.length; i++){
        totalQuarterlyEarnings = totalQuarterlyEarnings + data[i][quarterly]
        totalAverageEarnings = totalQuarterlyEarnings / numberOfSalesIn1Quarter
    }
    return totalAverageEarnings

}

function getTotalOverallSales(data){
    let totalOverall = 0
    for(let i = 0; i < data.length; i++){
        totalOverall = totalOverall + data[i].totalSales
    }
    return totalOverall
}

function generateYearlyReport(records){
    let bestPerformer = getBestPerformer(records)
    let topPerformersCount = getTopPerformersCount(records)
    let q1Average = getQuarterlyAverage(records, "q1Sales")
    let q2Average = getQuarterlyAverage(records, "q2Sales")
    let q3Average = getQuarterlyAverage(records, "q3Sales")
    let q4Average = getQuarterlyAverage(records, "q4Sales")
    let totalOverallSales = getTotalOverallSales(records)


    let yearlyReport = "===== Annual Sales Report =====" + "\n"
    yearlyReport += "-----\n"
    yearlyReport += "Best Performer" + "\n"
    yearlyReport += "-----\n"
    yearlyReport += "Name: " + bestPerformer.name + "\n"
    yearlyReport += "Location: " + bestPerformer.location + "\n"
    yearlyReport += "Total Sales By Best Performer: " + bestPerformer.totalSales + "\n\n"
    yearlyReport += "-----\n"
    yearlyReport += "Top Performers" + "\n"
    yearlyReport += "-----\n"
    yearlyReport += "Total No. of Top Performes: " + topPerformersCount + "\n\n"
    yearlyReport += "-----\nSales Averages\n-----" + "\n"
    yearlyReport += "Q1 Average Sales: " + q1Average + "\n"
    yearlyReport += "Q2 Average Sales: " + q2Average + "\n"
    yearlyReport += "Q3 Average Sales: " + q3Average + "\n"
    yearlyReport += "Q4 Average Sales: " + q4Average + "\n\n"
    yearlyReport += "-----\n"
    yearlyReport += "Total Sales: " + totalOverallSales + "\n"
    yearlyReport += "Total Average Sales: " + totalOverallSales / records.length + "\n"
    yearlyReport += "-----"

    return yearlyReport
}

console.log(generateYearlyReport(records))