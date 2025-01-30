function operateNumbers(cb, num1, num2) {
  console.log(cb(num1, num2));
}

operateNumbers(
  function (num1, num2) {
    return num1 + num2;
  },
  10,
  12
);

operateNumbers(
  function (num1, num2) {
    return num1 - num2;
  },
  10,
  12
);
