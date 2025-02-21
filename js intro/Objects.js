const car = {
  model: "i20",
  brand: "hyundai",
  year: 2020,
};

car["model"] = 2023;
car.brand = "ford";

car.isAvailable = false;

console.log(car);

const car = new Object();
car.model = "120";
car.brand = "hyundai";
car.year = 2020;

function CarCreator(model, brand, year) {
  // {}
  this.model = model;
  this.brand = brand;
  this.make = year;
}

var c1 = new CarCreator("mustang", "ford", 2020);

console.log(c1);

static class
class Car {
  // {}
  model = "mustang";
  brand = "ford";
  make = 2020;
}

var c1 = new Car();
console.log(c1);

class Car {
  // {}
  constructor(model, brand, year) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    // runs at the time of creating a new instance
  }

}

Car.prototype.start = () => {
  console.log("Car started");
};

Car.prototype.wheels = 4;

var c1 = new Car("figo", "ford", 2023);

console.log(c1);

c1.start();

prototype inheritance(tradtional)

function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var d1 = new Dog("Buddy", "Mastiff");

d1.makeSound();

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

var d1 = new Dog("Buddy", "Mastiff");

d1.makeSound();

function Book(name, author) {
  // {}
  this.name = name;
  this.author = author;
}

Book.prototype.printName = function () {
  console.log(`Book Name : ${this.name}`);
};

function Magazine(name, author, category) {
  Book.call(this, name, author);
  this.category = category;
}
Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constructor = Magazine;

var newMag = new Magazine("abc", "def", "Fashion");

console.log(newMag);

newMag.printName();
