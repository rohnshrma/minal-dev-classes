//

// var age = parseInt(prompt("Enter your age : "));
// console.log(age >= 18);

// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not eligible");
// }
// if (age >= 60) {
//   console.log("Not FIT");
// } else if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not eligible");
// }

// var myName = prompt("Enter your name : ");
// if (myName.length >= 3) {
//   if (/^[A-Za-z]+$/.test(myName)) {
//     if (myName.startsWith("m")) {
//       console.log("Welcome to the meeting");
//     } else {
//       console.log("Not Allowed");
//     }
//   } else {
//     console.log("Name must contain only alpha charaters");
//   }
// } else {
//   console.log("Name must contain atleast 3 characters.");
// }

// var year = parseInt(prompt("Enter year : "));
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log(`${year} is a leap year`);
//     } else {
//       console.log(`${year} is not a leap year`);
//     }
//   } else {
//     console.log(`${year} is a leap year`);
//   }
// } else {
//   console.log(`${year} is not a leap year`);
// }

// var isLeap =
//   (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;
// console.log(isLeap);

// var today = parseInt(prompt("Enter the day today (0-6)  : ", "e.g. 0"));

// if (today === 0) {
//   console.log("Sunday");
// } else if (today === 1) {
//   console.log("Monday");
// } else if (today === 2) {
//   console.log("Tuesday");
// } else if (today === 3) {
//   console.log("Wednesday");
// } else if (today === 4) {
//   console.log("Thursday");
// } else if (today === 5) {
//   console.log("Friday");
// } else if (today === 6) {
//   console.log("Saturay");
// } else {
//   console.log("Invalid Day");
// }

// switch (today) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturay");
//     break;
//   default:
//     console.log("Invalid Day");
//     break;
// }

// 0-4 : free
// 5-10 : $2
// 11-14 : $5
// >14 : $10
// switch (age) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("free");
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log("2");
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//     console.log("5");
//     break;
//   default:
//     console.log("10");
// }

var marks = parseInt(prompt("Enter your marks : "));

switch (true) {
  case marks > 90 && marks <= 100:
    console.log("A");
    break;
  case marks > 80 && marks <= 90:
    console.log("B");
    break;
  case marks > 70 && marks <= 80:
    console.log("C");
    break;
  case marks >= 60 && marks <= 70:
    console.log("C");
    break;
  case marks >= 0 && marks < 60:
    console.log("Fail");
    break;
  default:
    console.log("Invalid marks");
}
