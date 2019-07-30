"use strict";
function CAnimal(name, type) {
    this.name = name;
    this.type = type || "BASE_ANIMAL";
    return this;
}
CAnimal.prototype.greet = function () {
    console.log('hi from animal', this.name);
};
function Dog(name) {
    CAnimal.call(this, name, 'DOG');
}
Dog.prototype.greet = function () {
    console.log('hi from dog', this.name);
};
var minx = new CAnimal('minx');
minx.greet();
var fido = new Dog('fido');
fido.greet();
