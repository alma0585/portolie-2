

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



const island = ['T', '-', 'T']

console.log("There are 3 moves in the island",island.length)


for (let i = 0; i < island.length; i++) {
    if (island[i] === 'T'){
        console.log(`Treasure found at move ${i + 1}:)`); }
    else {
        console.log(`No treasure found at move ${i + 1} :(`); }

}

let countOfTreasure = 0;

for (let i =0; i < island.length; i++) {
    if (island[i] === 'T') {
        countOfTreasure++;
    }
}

console.log("Total treasures on this island:", countOfTreasure)












function getStartupName() {

    const firstName = ["Lil", "Big", "Dr.", "Ice", "Yo", "Young", "Chief", "Playboi", "Dj"];
    const secondName = ["Heat", "Swag", "Cookie", "Llama", "Junglejuice", "Fortnite", "Cocio", "Crisp", "Slipper"];
// Her har jeg lavet 2 arrays med navne jeg gerne vil have med i min generator

    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomSecondName = secondName[Math.floor(Math.random() * secondName.length)];
// Her bruger jeg så Math.random funktionen til at tilfældigt vælge et navn fra hver array

    return randomFirstName + " " + randomSecondName;
// også her får jeg den til at returnere det random første navn og det andet random navn med mellemrum imellem

}

console.log(getStartupName())
console.log(getStartupName())
console.log(getStartupName())
console.log(getStartupName())