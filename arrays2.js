

const start = "There are 8 grades in the class";

console.log(start)

// Bare min start tekst

const grades = [67, 55, 99, 71, 60, 91, 78, 62]

console.log(grades)

// her definere jeg og laver en array med de grades jeg gerne vil have

grades.forEach(function (grade) {
    if (grade >= 90) {
        console.log(grade + " is an A");
    }
    else if (grade >= 80) {
        console.log(grade + " is an B");
    }
    else if (grade >= 70) {
        console.log(grade + " is an C");
    }
    else if (grade >= 60) {
        console.log(grade + " is an D");
    }
    else if (grade <= 60) {
        console.log(grade + " is an F")

    }

})

// her har jeg så defineret hvad de forskellige resultater giver for en grade



let total = 0;
grades.forEach(function (grade) {
    total += grade;
})

console.log(total)

let average = total / grades.length

console.log("average grade", average)

// her finder jeg gennemsnittet af grades

let performance;
if (average >= 90)  {
    performance = "EXCELLENT"
}
else if (average >= 80)  {
    performance = "GOOD"
}
else if (average >= 70)  {
    performance = "SATISFACTORY"
}
else if (average <= 60)  {
    performance = "NEEDS IMPROVEMENT"
}
console.log("Overall class performance", performance)

// her har jeg fremvist hvad den gennemsnitslige performance er i en klasse

let highestgrade =grades[0];


grades.forEach(function (grade) {
    if (grade > highestgrade) {
        highestgrade = grade;
    }
})

console.log("Highest grade in class", highestgrade)


// her har jeg defineret den højeste grade i klassen


let lowestgrade = grades[0];

grades.forEach(function (grade) {
    if (grade < lowestgrade) {
        lowestgrade = grade;
    }

})

console.log("Lowest grade in class", lowestgrade)