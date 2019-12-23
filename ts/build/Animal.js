"use strict";
// @ts-nocheck
// example uses lots of untyped 'this'
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
let minx = new CAnimal('minx');
minx.greet();
let fido = new Dog('fido');
fido.greet();
