const log = console.log

class Animal {
  constructor(name) {
    this.name = name
  }

  model() {
    log("base Car")
  }
}

const Dog = {
  greet () {
    log('woof')
  }
}

const Cat = {
  greet () {
    log('meeyow')
  }
}


Object.assign(Animal.prototype, Dog)  // mixin
let ford = new Animal('rover')
ford.greet() // woof


Object.assign(Cat, Dog) // overwrites
Cat.greet() // woof
