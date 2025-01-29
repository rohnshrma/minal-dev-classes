var num = [10,20,30, 40, 50]

var ans1 = num.find(num => num > 30)

var ans2 = num.find(function(ele) {
    return ele > 30;
})


var ans3 = num.filter(ele => ele > 30);

console.log(ans1)
console.log(ans2)
console.log(ans3)
