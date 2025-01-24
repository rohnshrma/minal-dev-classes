// fixed iterations : initialization ; condition ; update(increment | decrement)

// for(initialization;condition;update){
// code to be executed
// }

// for (var i = 1; i <= 10; i++) {
//   console.log("hello world", i);
// }
// for (var i = 10; i >= 1; i--) {
//   console.log("hello world", i);
// }
// var str = "JAVASCRIPT";

// var rev = "";
// for (var i = str.length - 1; i >= 0; i--) {
//   rev += str.charAt(i);
// }

// console.log(rev);

// var email = prompt("Enter email : ");

// while (email.length < 8 || !email.endsWith(".com") || !email.includes("@")) {
//   email = prompt("Enter email : ");
// }

// var str = "JAVASCRIPT";

// var rev = "";
// var i = str.length - 1;
// while (i >= 0) {
//   rev += str.charAt(i);
//   i--;
// }

// console.log(rev);

// var random = Math.floor(Math.random() * 100) + 1;

// var guess;
// var attempts = 0;
// do {
//   guess = parseInt(prompt("Guess Number : "));
//   attempts++
//   if (guess > random) {
//     console.log(`Too High!, Try Lower`);
//   } else if (guess < random) {
//     console.log(`Too Low!, Try Higher`);
//   } else if (isNaN(guess)) {
//     console.log(`Please Enter a valid Number`);
//     continue;
//   } else {
//     console.log(`Congratulation!, You've guessed correct number :${random}`);
//   }
// } while (guess !== random);
