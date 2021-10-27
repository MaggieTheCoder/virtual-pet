const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe ('constructor', () => {
    const pet = new Pet('Fido');
    it('sets the name property', () => {
       expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0',() => {
        expect(pet.age).toEqual(0)
    });
    it('has an initial hunger of 0',() => {
        expect(pet.hunger).toEqual(0)
    });
    
    it('has an initial fitness of 10',() => {
        expect(pet.fitness).toEqual(10)
    });  
      
});

describe ('pet grows and ages', () =>{
    const pet = new Pet('Fido');
    it('increments the age by 1 when growUp method is called', () => {
        pet.growUp()
        expect(pet.age).toEqual(1);
    });

    it('increases hunger by 5 when growUp method is called', () => {
        expect(pet.hunger).toEqual(5)
    });
    
    it('decreases fitness by 3 when growUp method is called', () => {
        expect(pet.fitness).toEqual(7)
    });

});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 8;
        pet.walk()
        expect(pet.fitness).toEqual(10)
    });

});

describe('feed', () => {
    it('decreases hunger by 3', () => {
    const pet = new Pet('Fido');
    pet.hunger = 7;
    pet.feed()
    expect(pet.hunger).toEqual(4)
});

});

describe('checkUp', () => {
    const pet = new Pet('Fido');
    it('checks if fitness is 3 or less', () => {
    pet.fitness = 2
    expect(pet.checkUp()).toEqual('I need a walk!')
});
    
    it('checks if pet/s hunger is 5 or more', () => {
    pet.hunger = 6
    pet.fitness = 8
    expect(pet.checkUp()).toEqual('I am hungry!')
});
    it('checks if fitness is 3 or less and pet hunger is 5 or more', () => {
        pet.hunger = 7
        pet.fitness = 2
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk!')
    });

    it('checks that fitness and hunger is above thresholds', () => {
    pet.hunger = 3
    pet.fitness = 7
    expect(pet.checkUp()).toEqual('I feel great!')
});
});