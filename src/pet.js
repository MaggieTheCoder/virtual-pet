function Pet(name) {
    this.name = name;
    this.age= 0;
}
Pet.prototype.growUp = function() {
    this.age += 1;
};
const pet = new Pet('Fido');







module.exports = Pet; 