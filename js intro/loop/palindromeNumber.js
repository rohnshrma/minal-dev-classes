const rl = require("readline-sync");
const input = rl.question("Enter Number to check palindrome :: ");
var left =0;
var right = input.length;
while(input[left]===input[right-1] && left<right) {
    left++;
    right--;
}
if(left === right + 1 || left === right) {
    console.log("PALINDROME")
} else {
    console.log("NOT PALINDROME")
}

