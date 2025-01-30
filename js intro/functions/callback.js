function calculateSquare(num1) {
  return num1 ** 2;
}

function processNumber(callback, num2) {
  console.log(callback(num2));
}

processNumber(calculateSquare, 3);
