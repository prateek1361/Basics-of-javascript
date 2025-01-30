console.log("A5_Exercise_2")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

const employeeData = [
    {
        name: "Rajesh Kumar",
        Department : "Marketing",
        hourlySalary: 250,
        weekOneHours: 40,
        weekTwoHours: 42,
        weekThreeHours: 38,
        weekFourHours: 39,
        bonusMultiplier: 0.65
    },
    {
        name: "Priya Gupta",
        Department : "Sales",
        hourlySalary: 220,
        weekOneHours: 38,
        weekTwoHours: 40,
        weekThreeHours: 37,
        weekFourHours: 41,
        bonusMultiplier: 0.5
    },
    {
        name: "Ankit Sharma",
        Department : "Finance",
        hourlySalary: 280,
        weekOneHours: 35,
        weekTwoHours: 36,
        weekThreeHours: 39,
        weekFourHours: 38,
        bonusMultiplier: 0.8
    },
    {
        name: "Ritu Singh",
        Department : "Operations",
        hourlySalary: 300,
        weekOneHours: 42,
        weekTwoHours: 41,
        weekThreeHours: 43,
        weekFourHours: 40,
        bonusMultiplier: 0.45
    },
    {
        name: "Rahul Verma",
        Department : "IT",
        hourlySalary: 260,
        weekOneHours: 37,
        weekTwoHours: 39,
        weekThreeHours: 38,
        weekFourHours: 36,
        bonusMultiplier: 0.7
    },
]
console.log(employeeData)

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")


let bonusThreshold = 40 * 4
let bonusHours = 0
for(let i = 0; i < employeeData.length; i++){
    let totalHours = employeeData[i].weekOneHours + employeeData[i].weekTwoHours + employeeData[i].weekThreeHours + employeeData[i].weekFourHours
    let totalSalaryForFourWeeks = totalHours * employeeData[i].hourlySalary
    employeeData[i].totalSalaryForFourWeeks = totalSalaryForFourWeeks
    if (totalHours > bonusThreshold) {
        bonusHours = totalHours - bonusThreshold;
        let bonus = bonusHours * employeeData[i].hourlySalary * employeeData[i].bonusMultiplier
        employeeData[i].bonus = bonus
        } else {
            employeeData[i].bonus = 0
        }



}

console.log(employeeData)

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")


function generatePayslip(employeeData){

    let payslip = "===== Employee Payslip =====" + "\n"
    for(let i = 0; i < employeeData.length; i++){
    payslip += "Name: " + employeeData[i].name + "\n"
    payslip += "Department: " + employeeData[i].Department + "\n"
    payslip += "Total Hours Worked: " + (employeeData[i].weekOneHours + employeeData[i].weekTwoHours + employeeData[i].weekThreeHours + employeeData[i].weekFourHours) + "\n"
    payslip += "Total Salary: " + employeeData[i].totalSalaryForFourWeeks + "\n"
    payslip += "Bonus: " + employeeData[i].bonus + "\n------\n"
 }

    return payslip
}

console.log(generatePayslip(employeeData))

console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

function getHighestPaidEmployee(data){
    let highestSalary = data[0]
    for(let i = 1; i < data.length; i++){
        if(data[i].totalSalaryForFourWeeks > highestSalary.totalSalaryForFourWeeks){
            highestSalary = data[i]
        }
    }
    return highestSalary
}

function getTotalHoursWorkedByAll(data){
    let totalEmployeeHours = 0
    for(let i = 0; i < data.length; i++){
        totalEmployeeHours = totalEmployeeHours + data[i].weekOneHours + data[i].weekTwoHours + data[i].weekThreeHours + data[i].weekFourHours 
    }
    return totalEmployeeHours
}

function getWeekAverageHours(data, week){
    let weekTotalHours = 0
    for(let i = 0; i < data.length; i++){
        weekTotalHours = weekTotalHours + data[i][week]
    }
    return weekTotalHours / data.length
}

function generateHrReport(employeeData){
    let bestEmployee = getHighestPaidEmployee(employeeData)
    let totalHoursWorked = getTotalHoursWorkedByAll(employeeData)
    let weekOneAverage = getWeekAverageHours(employeeData, "weekOneHours")
    let weekTwoAverage = getWeekAverageHours(employeeData , "weekTwoHours")
    let weekThreeAverage = getWeekAverageHours(employeeData, "weekThreeHours")
    let weekFourAverage = getWeekAverageHours(employeeData, "weekFourHours")

    let report = "====== Human Resources Report ======" + "\n"
    report += "\n------\n"
    report += "Most Paid Employee" + "\n"
    report += "------\n"
    report += "Name: " + bestEmployee.name + "\n"
    report += "Department: " + bestEmployee.Department + "\n"
    report += "Total Hours Worked: " + (bestEmployee.weekOneHours + bestEmployee.weekTwoHours + bestEmployee.weekThreeHours + bestEmployee.weekFourHours) + "\n"
    report += "Total Salary: " + bestEmployee.totalSalaryForFourWeeks + "\n"
    report += "\n------\n"
    report += "Company Averages" + "\n"
    report += "------\n"
    report += "Total Hours worked by All: " + totalHoursWorked + "\n"
    report += "Total Average hours of Company: " + totalHoursWorked / employeeData.length + "\n"
    report += "------\n"
    report += "Total Average of Week One: " + weekOneAverage + "\n"
    report += "Total Average of Week Two: " + weekTwoAverage + "\n"
    report += "Total Average of Week Three: " + weekThreeAverage + "\n"
    report += "Total Average of Week Four: " + weekFourAverage + "\n"



    return report
}

console.log(generateHrReport(employeeData))






