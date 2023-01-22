// // 1. Write a function that takes your age in years and returns your age in minutes.

// function ageYears (age) {
//     const yearsToWeeks = age * 52;
//     const weeksToDays = yearsToWeeks * 365;
//     const daysToHours = weeksToDays * 24;
//     const hoursToMinutes = daysToHours * 60;
    
//     return hoursToMinutes(age)
// }

// const result = hoursToMinutes(age);
// console.log(result)

// Write a function that takes in an array of numbers and returns the sum of all even numbers.

const numArray = (numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            result += numbers[i]
        const sum = result + result[i]
        }
    }
    return result
}
console.log(numArray(numbers))

// Pyramid exercise with emojis (triangle shape)


const showTriangle = (loop, symbol) => {
    let result = "";
for (let i = 0; i < 10; i++) {
    result += symbol;
    console.log(result); // Print first left row
    }
}
const finalResult = showTriangle(30, "*")

/*

let result = "";

for (let i = 0; i < 10; i++) {
    result += "*";

    console.log(result);
};

const finalResult = showTriangle(); */

// Given an array of numbers, return the biggest one

const number = [2,5,20,2,4,7];

let biggestNumber = 0;
for(let i = 0; i < number.length; i++) {

    const eachNumber = number[i];

    // Process
    let result = `BN: ${biggestNumber} EN: ${eachNumber}`;

    if (eachNumber > biggestNumber) {
        biggestNumber = eachNumber; } else {
            null;
        }

        // Render Process
        console.log(result);
    }

    console.log(`The biggest is... ${biggestNumber}`)

    // Now make 3 triangles with emojis, one below the other

    const tripleTriangle = (loop, symbol) => {
        let result = "";
        for (let i = 0; i < loop.length; i++) {
            result += symbol;
        }
        console.log(result)

        if(i % 11 === 0) {
            result = symbol;
            i++
        }
        return tripleTriangle
    }

 const finalResult2 = tripleTriangle(20, "*");