console.log("A5.12_CW")
console.log("---- ---- ----")

const studentsData = [
    { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90, computers: 88, science: 82, totalMarks: 415, avgMarks: 83 },
    { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95, computers: 92, science: 78, totalMarks: 420, avgMarks: 84 },
    { name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87, computers: 95, science: 90, totalMarks: 442, avgMarks: 88.4 },
    { name: "Kaveri", rollNo: 104, hindi: 89, english: 95, maths: 96, computers: 98, science: 91, totalMarks: 469, avgMarks: 93.8 }
  ]

  function getTopper(data){
    let highestTotalStudent = data[0]
    for(let i = 1; i < data.length; i++){
        if(data[i].totalMarks > highestTotalStudent.totalMarks){
            highestTotalStudent = data[i]
        }
    }
    return highestTotalStudent
  }

  function getGrade(avg){
    if(avg >= 90) return "A";
    if(av >= 80) return "B";
    if(avg >= 70) return "C";
    if(avg >= 60) return "D";
    if(avg >= 50) return "E";
    return "F"
  }

  function getAGradersCount(data){
    let count = 0
    for(let i = 0; i < data.length; i++){
        if(data[i].avgMarks >= 90){
            count = count + 1
        }
    }
    return count
  }

  function getTotalMarks(data){
    let classTotalMarks = 0
    for(let i = 0; i < data.length; i++){
        classTotalMarks = classTotalMarks + data[i].totalMarks
    }
    return classTotalMarks
  }

  function calculateSubjectAverage(data, subjectName){
    let totalMarks = 0
    for(let i = 0; i < data.length; i++){
        totalMarks = totalMarks + data[i][subjectName]
    }
    return totalMarks / data.length
  }

  function generateClassReport(studentsData){
    let topper = getTopper(studentsData)
    let aGradeCount = getAGradersCount(studentsData)
    let totalMarksScoredByClass = getTotalMarks(studentsData)
    let hindiAverage = calculateSubjectAverage(studentsData, "hindi")
    let mathsAverage = calculateSubjectAverage(studentsData, "maths")
    let englishAverage = calculateSubjectAverage(studentsData, "english")
    let scienceAverage = calculateSubjectAverage(studentsData, "science")
    let computerAverage = calculateSubjectAverage(studentsData, "computers")


    let report = "====== Class Performance Report ======\n";
    report += "Topper:\n"
    report += "------\n"
    report += "Name: " + topper.name + "\n"
    report += "Roll no: " + topper.rollNo + "\n"
    report += "Total Marks: " + topper.totalMarks + "\n"
    report += "Grade: " + getGrade(topper.avgMarks) + "\n"
    report += "\nA graders: \n"
    report += "------\n"
    report += "Total no. of A graders: " + aGradeCount + "\n"
    for(let i = 0; i < studentsData.length; i++){
        if(studentsData[i].avgMarks >= 90){
            report += "Name: " + studentsData[i].name + "\nTotal Marks: " + studentsData[i].totalMarks + "\n-----"
        }
    }

    report += "\nClass Average:\n"
    report += "------\n"
    report += "Total Marks Scored by Class: " + totalMarksScoredByClass + "\n"
    report += "Total Average of Class: " + totalMarksScoredByClass / studentsData.length + "\n"
    report += "------\n"
    report += "Total Average of Hindi: " + hindiAverage + "\n"
    report += "Total Average of Maths: " + mathsAverage + "\n"
    report += "Total Average of English: " + englishAverage + "\n"
    report += "Total Average of Science: " + scienceAverage + "\n"
    report += "Total Average of Computers: " + computerAverage + "\n"


    return report
  }

  console.log(generateClassReport(studentsData))

