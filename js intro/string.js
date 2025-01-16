// var x = "hello world";
// var y = "hello world";

// var yourname = "minal";

// var z = `hello world my name is ${yourname}`;

// console.log(z);

// var str = new String("hello world");
// console.log(typeof str);

// var fName = prompt("Enter your first name : ");
// var lName = prompt("Enter your last name : ");
// // var age = prompt("Enter your age : ");
// var age = parseInt(prompt("Enter your age : "));

// // console.log(typeof fName, typeof lName, typeof age);

// console.log(fName + lName + age);

// console.log(123 + 123);
// console.log(123 + "123");
// console.log("123" + "123");

// console.log(123 + +"123");

// "fghj"

// var fName = prompt("Enter your first name  :")
// var lName = prompt("Enter your last name  :")
// var age = parseInt(prompt("Enter your age  :"))
// console.log("hello world my name is" + fName + " " + lName + " and i am "+ age + " years old.")

// console.log(`hello world my name is ${fName} ${lName}  and i am ${age} years old.`)

var txt = "hello world my name is john and i am web developer";

// console.log(txt.length)

// console.log(txt[0])
// console.log(txt[txt.length - 1])

// console.log(txt.charAt(12));
// console.log(txt.charAt(-1));
// console.log(txt.at(-1));

// console.log(txt.includes(, 12));

// console.log(txt.replace(/a/g, "X"));

// console.log(txt.slice(4, 12)); //4-11

// console.log(txt.split());
// console.log(txt.split(""));
// console.log(txt.split(" "));
// console.log(txt.split("a"));

// console.log(txt.split("", 10));

// console.log(txt.startsWith("Za"));
// console.log(txt.startsWith("hel", 12));

// console.log(txt.endsWith("he"));
// console.log(txt.endsWith("er"));
// console.log(txt.endsWith("d ", 12));

// console.log(txt.length);

// console.log(txt.padStart(55, "@#$").padEnd(60, "*&%"));

// min lenght : 8
// must contain : @
//  ends with : .com

// console.log(txt.length > 8 && txt.includes("@") && txt.endsWith(".com"));

// console.log(txt.indexOf("a"));
// console.log(txt.indexOf("a", 17));
// console.log(txt.lastIndexOf("a"));

// txt.toLowerCase()
// console.log(txt.toUpperCase());

// mcdonalds => McDonalds
// ZARa => ZaRa

var brand = prompt("Brand name : ").toLowerCase();
console.log(
  brand[0].toUpperCase() +
    brand[1].toLowerCase() +
    brand[2].toUpperCase() +
    brand.slice(3).toLowerCase()
);
