const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;

class Pet {
    constructor(name) {
        this.name = name;
        this.age = MINIMUM_AGE;
        this.hunger = MINIMUM_HUNGER;
        this.fitness = MAXIMUM_FITNESS;
    }
    growUp() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }
    walk() {
        if((this.fitness + 4) <= 10) {
        this.fitness += 4
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}
}




const pet = new Pet('Fido');




module.exports = Pet;