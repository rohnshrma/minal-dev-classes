var int2DArr = [
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4]
];

console.log(int2DArr.length);
console.log(int2DArr[0].length);
console.log(int2DArr[0][0]);

var ans = 0;
for (let i = 0; i < int2DArr.length; i++) {
  for (let j = 0; j < int2DArr[i].length; j++) {
    ans += int2DArr[i][j];
  }
}


 console.log("SUM::" + ans);
