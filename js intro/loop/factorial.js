const rl = require("readline-sync");
const fact = parseInt(rl.question("Enter Number :: "));
if (fact === 0 || fact === 1) {
  console.log("1");
} else {
  var ans = 1;
  for (i = fact; i > 0; i--) {
    ans = ans * i;
  }
  console.log(ans);
}
