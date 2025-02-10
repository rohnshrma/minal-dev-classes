function Vehicle(name,type) {
    this.name=name;
    this.type=type;
}

Vehicle.prototype.engineSTarted = () => {
    console.log("ENGINE STARTED")
}

function Car(name,type,brand) {
    Vehicle.call(this,name,type) // note 1
    this.brand=brand;
}

Car.prototype = Object.create(Vehicle.prototype) // note 2
Car.prototype.constructor = Car // note 3

var c1 = new  Car ("Hyndai","sedan", "HyndaiJapan")

console.log(c1)
c1.engineSTarted();


