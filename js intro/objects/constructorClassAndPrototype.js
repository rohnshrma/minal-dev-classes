class Mobile {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

var m1 = new Mobile("apple", "iphone14", 2022);
console.log(m1);

Mobile.prototype.isSmartPhone = true;
Mobile.prototype.displayInfo = () => {
  console.log("test print");
  console.log(this.brand + ":" + this.model + ":" + this.year);
};

var m2 = new Mobile("samsung", "galaxy", 2023);
m2.countryOfManufacture = "Korea";
console.log(m2);
console.log(m2.isSmartPhone);
m2.displayInfo();
