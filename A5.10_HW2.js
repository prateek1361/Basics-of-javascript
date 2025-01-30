console.log("A5.10_HW2")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")

const caloriesIntake = [
    {
        dayName : "Monday",
        breakfast: 300,
        lunch: 300,
        snacks: 150,
        dinner: 500 
    },
    {
        dayName : "Tuesday",
        breakfast: 250,
        lunch: 450,
        snacks: 200,
        dinner: 550
    },
    {
        dayName : "Wednesday",
        breakfast: 350,
        lunch: 550,
        snacks: 100,
        dinner: 700
    },
    {
        dayName : "Thursday",
        breakfast: 400,
        lunch: 600,
        snacks: 180,
        dinner: 650
    },
    {
        dayName : "Friday",
        breakfast: 280,
        lunch: 480,
        snacks: 120,
        dinner: 580
    },
    {
        dayName : "Saturday",
        breakfast: 320,
        lunch: 520,
        snacks: 160,
        dinner: 620
    },
]

for(let i = 0; i < caloriesIntake.length; i++){
    console.log("Day: " + caloriesIntake[i].dayName + "\n" + "Breakfast: " + caloriesIntake[i].breakfast + "\n" + "Lunch: " + caloriesIntake[i].lunch + "\n" + "Snacks: " + caloriesIntake[i].snacks + "\n" + "Dinner: " + caloriesIntake[i].dinner + "\n")
}

console.log("---- ---- ----")
console.log("1.2")

const midAfternoonCalories = [100, 120, 105, 110, 100, 130]

for(let i = 0; i < caloriesIntake.length; i++){
    caloriesIntake[i].midAfternoon = midAfternoonCalories[i]
    console.log(caloriesIntake[i])
}

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")

const caloriesSunday = {
    dayName: "Sunday",
    breakfast: 370,
    lunch: 430,
    snacks: 140,
    dinner: 530,
    midAfternoon: 150
}

console.log("Sunday Calorie intake: ", caloriesSunday)

console.log("---- ---- ----")
console.log("2.2")

caloriesIntake.push(caloriesSunday)
console.log("Updated Data: ", caloriesIntake)

console.log("---- ---- ----")
console.log("2.3")

for(let i = 0; i < caloriesIntake.length; i++){
    const totalCalorie = caloriesIntake[i].breakfast + caloriesIntake[i].lunch + caloriesIntake[i].snacks + caloriesIntake[i].dinner + caloriesIntake[i].midAfternoon
    caloriesIntake[i].totalCalorie = totalCalorie
}

console.log("Array with total calories: ", caloriesIntake)

console.log("---- ---- ----")
console.log("2.4")

for(let i = 0; i < caloriesIntake.length; i++){
    const numberOfMeals = 5
    const avgCalories = caloriesIntake[i].totalCalorie / numberOfMeals
    caloriesIntake[i].avgCalories = avgCalories
}

console.log("Calorie Data: ", caloriesIntake)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

for(let i = 0; i < caloriesIntake.length; i++){
    generateCalorieIntakeCard(caloriesIntake[i])
}

function generateCalorieIntakeCard(calories){
    console.log("===== Calorie Card for " + calories.dayName + " =====" + "\n" + "Breakfast: " + calories.breakfast + "\n" + "Lunch: " + calories.lunch + "\n" + "Snacks: " + calories.snacks + "\n" + "Dinner: " + calories.dinner + "\n" + "Mid Afternoon: " + calories.midAfternoon + "\n-----" + "\n" + "Total: " + calories.totalCalorie + "\n" + "Average: " + calories.avgCalories + "\n" + "Comment: " + getComment(calories.totalCalorie) + "\n----- ----- -----" + "\n"
    )
}

function getComment(totalCalorie){
    if(totalCalorie <= 1550){
        return "Your calorie intake was within limits"
    } else {
        return "Your calorie intake was higher than recommended"
    }
}