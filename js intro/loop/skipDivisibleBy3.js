var ans = "";
for (var i = 2; i < 30; i++) {
  if (i % 3 == 0) {
    continue;
  }
  ans += i + " ";
}
console.log(ans);
