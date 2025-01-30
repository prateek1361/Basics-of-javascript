console.log("A5.10_HW1")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")

const playerScores = [
    {
        name: "Virat",
        edenGardens: 72,
        wankhedeStadium: 88,
        ferozShahKotla: 45,
        chepauk: 74
    },
    {
        name: "Rohit",
        edenGardens: 64,
        wankhedeStadium: 41,
        ferozShahKotla: 68,
        chepauk: 34 
    },
    {
        name: "Shikhar",
        edenGardens: 54,
        wankhedeStadium: 38,
        ferozShahKotla: 72,
        chepauk: 44
    },
    {
        name: "Risabh",
        edenGardens: 22,
        wankhedeStadium: 27,
        ferozShahKotla: 34,
        chepauk: 51
    }
]

for(let i = 0; i < playerScores.length; i++){
    console.log("Cricketer: " + playerScores[i].name + "\n" + "Eden Gardens: " + playerScores[i].edenGardens + "\n" + "Wankhede Stadium: " + playerScores[i].wankhedeStadium + "\n" + "Feroz Shah Kotla: " + playerScores[i].ferozShahKotla + "\n" + "Chepauk: " + playerScores[i].chepauk + "\n\n")
}

console.log("---- ---- ----")
console.log("1.2")

const chinnaswamyStadiumScores = [54, 82, 49, 45]

for(let i = 0; i < playerScores.length; i++){
    playerScores[i].chinnaswamyStadium = chinnaswamyStadiumScores[i]
    console.log(playerScores[i])
}

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")

const KLRahulScores = {
    name: "KL Rahul",
    edenGardens: 34,
    wankhedeStadium: 56,
    ferozShahKotla: 42,
    chepauk: 31,
    chinnaswamyStadium: 68
}

console.log("KL Rahul's Data: ", KLRahulScores)

console.log("---- ---- ----")
console.log("2.2")

playerScores.push(KLRahulScores)
console.log("Updated Data: ", playerScores)

console.log("---- ---- ----")
console.log("2.3")

for(let i = 0; i < playerScores.length; i++){
    const totalScores = playerScores[i].edenGardens + playerScores[i].wankhedeStadium + playerScores[i].ferozShahKotla + playerScores[i].chepauk + playerScores[i].chinnaswamyStadium

    playerScores[i].totalScores = totalScores
}
console.log("Array with total scores: ", playerScores)

console.log("---- ---- ----")
console.log("2.4")

for(let i = 0; i < playerScores.length; i++){
    const numberOfStadiums = 5
    const avgScores = playerScores[i].totalScores / numberOfStadiums

    playerScores[i].avgScores = avgScores
}

console.log("Cricketer Data: ", playerScores)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

for(let i = 0; i < playerScores.length; i++){
    generateScoreCard(playerScores[i])
}

function generateScoreCard(player){
    console.log("===== Score Card for " + player.name + " =====" + "\n" + "Eden Gardens: " + player.edenGardens + "\n" + "Wankhede Stadium: " + player.wankhedeStadium + "\n" + "Feroz Shah Kotla: " + player.ferozShahKotla + "\n" + "Chepauk: " + player.chepauk + "\n" + "Chinnaswamy Stadium: " + player.chinnaswamyStadium + "\n-----" + "\n" + "Total: " + player.totalScores + "\n" + "Average: " + player.avgScores + "\n" + "Performance: " + getPerformance(player.avgScores) + "\n----- ----- ----- ----- -----" + "\n")

}

function getPerformance(avg){
    if(avg >= 80){
        return "Good"
    } else if(avg >= 60 && avg <= 79){
        return "Above Average"
    } else if(avg >= 45 && avg <= 59){
        return "Average"
    } else {
        return "Bad"
    }
}