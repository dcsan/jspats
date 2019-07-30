interface IAnimal {
  name: string
  type: string
}

function CAnimal(name: string, type?: string): IAnimal {
  this.name = name
  this.type = type || "BASE_ANIMAL"
  return this
}

CAnimal.prototype.greet = function () {
  console.log('hi from animal', this.name)
}

function Dog (name: string) {
  CAnimal.call(this, name, 'DOG')
}

Dog.prototype.greet = function () {
  console.log('hi from dog', this.name)
}

let minx = new CAnimal('minx')
minx.greet()

let fido = new Dog('fido')
fido.greet()

