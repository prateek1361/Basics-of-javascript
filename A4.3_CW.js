console.log("A4.3_CW")
console.log("---- ---- ----")

console.log("Exercise 1")
console.log("---- ---- ----")

let hourlyRate = 500
let hoursWorked = 40

function calculateGrossPay(hourlyRate, hoursWorked){
    return hourlyRate * hoursWorked
}

let grossPay = calculateGrossPay(hourlyRate, hoursWorked)
console.log("Gross Pay:", grossPay)

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

let overtimeRate = 1.5

function calculateOvertimePay(hourlyRate, hoursWorked, overtimeRate){
    let overtimePay = 0
    if(hoursWorked > 40){
        let overtimeHours = hoursWorked - 40
        overtimePay = overtimeHours * hourlyRate *overtimeRate
    }
    return overtimePay
}

let overTimePay = calculateOvertimePay(hourlyRate, hoursWorked, overtimeRate)

console.log("Overtime pay:", overTimePay)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

let taxRate = 0.2
let insuranceRate = 0.1
let retirementRate = 0.05

function calculateDeductions(grossPay, taxRate, insuranceRate, retirementRate){
    let taxAmount = grossPay * taxRate
    let insuranceAmount = grossPay * insuranceRate
    let retirementAmount = grossPay * retirementRate
    return taxAmount + insuranceAmount + retirementAmount
}

let deductions = calculateDeductions(grossPay, taxRate, insuranceRate, retirementRate)
console.log("Deductions:", deductions)

console.log("---- ---- ----")
console.log("Exercise 4")
console.log("---- ---- ----")

function calculateNetPay(grossPay, overTimePay, deductions){
    return grossPay + overTimePay - deductions
}

let netPay = calculateNetPay(grossPay, overTimePay, deductions)
console.log("Net Pay:", netPay)

console.log("---- ---- ----")
console.log("Exercise 5")
console.log("---- ---- ----")

let performanceScore = 7

function calculateBonus(performanceScore){
    let  bonus = 0

    if(performanceScore >= 8){
        bonus = 10000
    }else if(performanceScore >= 6){
        bonus = 5000
    }else if(performanceScore >= 4){
        bonus = 2500
    }else{
        bonus = 0
    }

    return bonus
}

let bonusAmount = calculateBonus(performanceScore)
console.log("Bonus:", bonusAmount)

console.log("---- ---- ----")
console.log("Exercise 6")
console.log("---- ---- ----")

function generatePayStub(employeeName, hourlyRate, hoursWorked, overTimePay, grossPay, deductions, netPay, bonusAmount){
    let payStub = "Pay Stub for " + employeeName + "\n\n"  + "Hourly Rate: " + hourlyRate + "\n" + "Hours Worked: " + hoursWorked + "\n" + "Gross Pay: " + grossPay + "\n" + "Overtime Pay: " + overTimePay + "\n" + "Deductions: " + deductions + "\n" + "Bonus: " + bonusAmount + "\n" + "Final Net Pay: " + (netPay + bonusAmount)

    return payStub
}

console.log(generatePayStub("Rahul", hourlyRate, hoursWorked, overTimePay, grossPay , deductions, netPay, bonusAmount))
