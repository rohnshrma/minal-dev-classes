class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes ${this.sound}`);
  }
}


class Dog extends Animal {
    constructor(name,sound,breed) {
        super(name,sound)
        this.breed=breed;
    }

    isRescued(){
        console.log("IsRescued is false by default")
    }
}

var d1 = new Dog ("Tommy","Bow","GR")

console.log(d1)
d1.makeSound();
d1.isRescued();