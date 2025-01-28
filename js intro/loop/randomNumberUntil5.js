// Create a "do...while" loop to generate a random number between 1 and 10 until you get 5

var num;
do {
    num = Math.floor(Math.random() * 10);
    console.log(num);
} while(num!=5)