function calculateRemainingYears(cb_ageFunc, averageAge, yob) {
  console.log(averageAge - cb_ageFunc(yob));
}

calculateRemainingYears((yob) => 2025 - yob, 99, 1991);
