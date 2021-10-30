const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MAXIMUM_AGE = 30;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;


class Pet {
    constructor(name) {
        this.name = name;
        this.age = MINIMUM_AGE;
        this.hunger = MINIMUM_HUNGER;
        this.fitness = MAXIMUM_FITNESS;
    }

    get isAlive() {
        if (this.age >= MAXIMUM_AGE || this.hunger >= MAXIMUM_HUNGER || this.fitness <= 0) {
            return false
        } else {
            return true
        }
    }
    
    growUp() {
        if (!this.isAlive) { throw new Error ('Your pet is no longer alive :(')}
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }
    walk() {
        if (!this.isAlive) { throw new Error ('Your pet is no longer alive :(')}
        if((this.fitness + 4) <= 10) {
        this.fitness += 4
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
 }
    feed() {
        if (!this.isAlive) { throw new Error ('Your pet is no longer alive :(')}
        
        if ((this.hunger - 3) >= MINIMUM_HUNGER) {
            this.hunger -= 3;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
    }

    checkUp() {
        if (!this.isAlive) { throw new Error ('Your pet is no longer alive :(')}
        const hungry = (this.hunger >= 5)
        const walkies = (this.fitness <= 3)

                    
        if (walkies && hungry) {
            return 'I am hungry AND I need a walk!'
        }; 
        
        if (hungry) {
            return 'I am hungry!'
        };

        if (walkies) {
            return 'I need a walk!'
        }; 
        
        if (!walkies && !hungry) {
             return 'I feel great!'
        };
        }
    }

       
    



const pet = new Pet('Fido');




module.exports = Pet;