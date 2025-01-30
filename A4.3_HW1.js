console.log("A4.3_HW1")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

let day1Burnt = 400
let day1Intake = 1500
let day2Burnt = 450
let day2Intake = 1800
let day3Burnt = 300
let day3Intake = 1600
let day4Burnt = 500
let day4Intake = 2000
let baseCalorieBurn = 1500

function calculateSurplusDeficit(day, dayBurnt, dayIntake, baseCalorieBurn){
    calories = dayBurnt - (dayIntake + baseCalorieBurn)
    if(calories > 0){
        console.log(day + "surplus " + calories)
    }else{
        console.log(day + "deficit " + calories)
    }
    return calories
}

calculateSurplusDeficit("Day1: ", day1Burnt, day1Intake, baseCalorieBurn)
calculateSurplusDeficit("Day2: ", day2Burnt, day2Intake, baseCalorieBurn)
calculateSurplusDeficit("Day3: ", day3Burnt, day3Intake, baseCalorieBurn)
calculateSurplusDeficit("Day4: ", day4Burnt, day4Intake, baseCalorieBurn)

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

function calculateTotalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt){
   totalDayBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt

  return totalDayBurnt
}

let totalBurnt = calculateTotalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt)
console.log("Total Calories Burnt:", totalBurnt)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

function calculateTotalIntake(day1Intake, day2Intake, day3Intake, day4Intake){
    totalDayIntake = day1Intake + day2Intake + day3Intake +day4Intake

    return totalDayIntake
}

let totalIntake = calculateTotalIntake(day1Intake, day2Intake, day3Intake, day4Intake)
console.log("Total Calories Inatke:", totalIntake)

console.log("---- ---- ----")
console.log("Exercise 4")
console.log("---- ---- ----")

function calculateTotalSurplus(totalBurnt, totalIntake, baseCalorieBurn){
    totalDaySurplus = totalBurnt - (totalIntake + (4 * baseCalorieBurn))

    return totalDaySurplus
}

let totalSurplus = calculateTotalSurplus(totalBurnt, totalIntake, baseCalorieBurn)
console.log("Total Surplus/Deficit:", totalSurplus)

console.log("---- ---- ----")
console.log("Exercise 5")
console.log("---- ---- ----")

function generateWeeklySummary(totalBurnt, totalIntake, totalSurplus){
    let standingGoalAwards = 0
    if(totalBurnt >= 1000){
        standingGoalAwards = "congratulations! You have kept moving throughout. Keep it up!"
    }else{
         standingGoalAwards = "No Awards Yet."
    }

    let weeklySummary = "Weekly Summary:" + "\n" + "Total Calories Burnt: " + totalBurnt + "\n" + "Total Calories Intake " + totalIntake + "\n" + "Total Surplus/Deficit: " + totalSurplus + "\n\n" + "Standing Goal Award: " + standingGoalAwards

    return weeklySummary
}


console.log(generateWeeklySummary(totalBurnt, totalIntake, totalSurplus))
