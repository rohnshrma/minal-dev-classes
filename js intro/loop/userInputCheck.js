const rl = require("readline-sync");
var input;

do {
    input = rl.question("Enter input :: ");
} while(input.toLocaleLowerCase()!=='exit')
