// **Assignment: Practical Tasks on If-Else and Switch Statements**

// Task 1: Write an if-else statement to check if a given number is positive, negative, or zero.

//var num = 22;
// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//     console.log("Zero");
// }


// Task 2: Use a switch statement to determine the day of the week based on a number (1 for Sunday, 2 for Monday, etc.).

// const rl = require('readline-sync');
// const day = parseInt(rl.question('Enter Day? '));

// switch(day) {
//     case 1 : console.log("Sunday");
//                 break;
//     case 2 : console.log("Monday");
//                 break;
//     case 3 : console.log("Tuesday");
//                 break;
//     case 4 : console.log("Wednesday");
//                 break; 
//     case 5 : console.log("Thursday");
//                 break;
//     case 6 : console.log("Friday");
//                 break;
//     case 7 : console.log("Saturday");
//                 break;
// }

// Task 3: Write an if-else statement to check if a person is eligible to drive (age >= 18).

// Task 4: Use a switch statement to classify a letter as a vowel (a, e, i, o, u) or consonant.
// const rl = require('readline-sync');
// const letter = rl.question('Enter Letter? ');
// switch(letter) {
//     case 'a' : 
//     case 'e' : 
//     case 'i' : 
//     case 'o' : 
//     case 'u' : console.log("VOWEL");
//                 break;
//     default : console.log("CONSONANT");
// }


// Task 5: Write an if-else statement to check if a number is divisible by 5 and 3 simultaneously.
// const rl = require('readline-sync');
// const input = parseInt(rl.question('Enter Number to check if divisible by 5 and also 3 => '));
// if (input%5 === 0 && input%3===0) {
//     console.log("Number divided by 3 and 5")
// } else {
//     console.log("Number NOT divided by 3 and 5")
// }


// Task 6: Use a switch statement to classify the size of a t-shirt based on input ('S', 'M', 'L', 'XL').

// Task 7: Write an if-else statement to find the largest of three given numbers.

// const rl = require('readline-sync');
// const num1 = parseInt(rl.question('Enter first number => '));
// const num2 = parseInt(rl.question('Enter second number => '));
// const num3 = parseInt(rl.question('Enter third number => '));
// if(num1 > num2) {
//     if(num1 > num3) {
//         console.log(`${num1} is greater of ${num1} ${num2} and ${num3}`)
//     }
// } else if(num2 > num3) {
//     console.log(`${num2} is greater of ${num1} ${num2} and ${num3}`)
// } else {
//     console.log(`${num3} is greater of ${num1} ${num2} and ${num3}`)
// }

// Task 8: Use a switch statement to check whether a character is uppercase, lowercase, or neither.
// const rl = require('readline-sync');
// const letter = rl.question('Enter Letter? ');
// switch(true) {
//     case letter >= 'a' && letter <= 'z':
//         console.log("LOWER CASE");break;
//     case letter >= 'A' && letter <= 'Z':
//         console.log("UPPER CASE");break;
//     default : console.log("NEITHER");
// }
// Task 9: Write an if-else statement to check if a person is eligible for a senior citizen discount (age >= 60).

// Task 10: Use a switch statement to determine the type of triangle based on side lengths (equilateral, isosceles, scalene).
// const rl = require('readline-sync');
// const side1 = parseInt(rl.question('Enter side 1 length => '));
// const side2 = parseInt(rl.question('Enter side 2 length => '));
// const side3 = parseInt(rl.question('Enter side 3 length => '));
// if(side1 === side2 && side1 == side3) {
//    console.log(`EQUILATERAL`)
// } else if(side1 !== side2 && side2 !== side3 && side1!==side3) {
//     console.log(`SCALENE`)
// } else {
//     console.log(`ISOSCELES`)
// }

// Task 11: Write an if-else statement to check if a number is even or odd.

// Task 12: Use a switch statement to assign grades ('A', 'B', 'C', 'D', 'F') based on marks ranges.
// const rl = require('readline-sync');
// const marks = parseInt(rl.question('Enter marks => '));
// switch(true) {
//     case marks > 90 && marks <= 100:
//         console.log("A");break;
//     case marks > 80 && marks <= 90:
//         console.log("B");break;
//     case marks > 70 && marks <= 80:
//         console.log("C");break;
//     case marks > 50 && marks <= 70:
//         console.log("D");break;
//     default : console.log("F");
// }

// Task 13: Write an if-else statement to check if a year is a leap year.

// Task 14: Use a switch statement to classify a traffic light signal (red, yellow, green) and what action to take.

// Task 15: Write an if-else statement to check if a given character is a digit (0-9).

// Task 16: Use a switch statement to determine the season (Spring, Summer, Fall, Winter) based on a month number (1–12).
const rl = require("readline-sync");
const letter = parseInt(rl.question("Enter Month in number from 1 to 12? "));
switch (letter) {
  case 1:
  case 2:
  case 3:
    console.log("Spring");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Summer");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Fall");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Winter");
    break;
  default:
    console.log("INVALID MONTH");
}

// Task 17: Write an if-else statement to compare two numbers and print whether they are equal or which one is greater.

// Task 18: Use a switch statement to determine the category of a movie rating (G, PG, PG-13, R, NC-17).

// Task 19: Write an if-else statement to check if a number is within a given range (e.g., 10–50).

// Task 20: Use a switch statement to determine if a given grade (A, B, C, D, F) is a pass or fail grade.


