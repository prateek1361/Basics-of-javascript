console.log("A5.11_CW");
console.log("---- ---- ----");

const studentData = [
    { name: "Anu", rollNo: 101, hindi: 80, english: 75, maths: 90 },
    { name: "Priya", rollNo: 102, hindi: 85, english: 70, maths: 95 },
    { name: "Ravi", rollNo: 103, hindi: 78, english: 92, maths: 87 },
];

console.log("1.1");
console.log("---- ---- ----");

function printReportCard(rollNo) {
    let student = getReportByRollNo(rollNo);
    console.log(
        "===== Report Card for " +
            student.name +
            "======\n" +
            "Roll No.: " +
            student.rollNo +
            "\n------\nMarks:\n-----\n" +
            "hindi: " +
            student.hindi +
            "\n" +
            "English: " +
            student.english +
            "\n" +
            "maths: " +
            student.maths +
            "\n------ ------ ------",
    );
}

function getReportByRollNo(rollNo) {
    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i].rollNo === rollNo) {
            return studentData[i];
        }
    }
}

printReportCard(101);

printReportCard(102);

printReportCard(103);

console.log("---- ---- ----");
console.log("1.2");
console.log("---- ---- ----");

function getStudentsDataByCutOff(subjectName, cutOff) {
    let result = [];
    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i][subjectName] > cutOff) {
            result.push(studentData[i]);
        }
    }
    return result;
}

console.log("Student data with cutoff for hindi > 80");
console.log(getStudentsDataByCutOff("hindi", 80));

console.log("\nStudent data with cutoff for maths > 90");
console.log(getStudentsDataByCutOff("maths", 90));

console.log("\nStudent data with cutoff for english > 90");
console.log(getStudentsDataByCutOff("english", 90));

console.log("---- ---- ----");
console.log("1.3");
console.log("---- ---- ----");

for (let i = 0; i < studentData.length; i++) {
    let numberOfSubject = 3;

    let totalMarks =
        studentData[i].hindi + studentData[i].maths + studentData[i].english;
    studentData[i].totalMarks = totalMarks;

    studentData[i].avgMarks = studentData[i].totalMarks / numberOfSubject;
}

function printStudentsAboveAverage(avgCutOff) {
    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i].avgMarks > avgCutOff)
            console.log(
                studentData[i].name +
                    " has average marks " +
                    studentData[i].avgMarks,
            );
    }
}

printStudentsAboveAverage(82);

console.log("---- ---- ----");
console.log("1.4");
console.log("---- ---- ----");

function getHighestAverageMarks(data) {
    let highestAverage = data[0].avgMarks;
    for (let i = 0; i < data.length; i++) {
        if (data[i].avgMarks > highestAverage) {
            highestAverage = data[i].avgMarks;
        }
    }
    return highestAverage;
}
console.log(
    "Student with highest average marks: ",
    getHighestAverageMarks(studentData),
);
