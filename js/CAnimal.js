function CAnimal(name, type) {
  this.name = name
  this.type = type || "BASE_ANIMAL"
}

CAnimal.prototype.base = function () {
  console.log('hi from base', this.name)
}

CAnimal.prototype.greet = function () {
  console.log('hi from animal', this.name)
}

function CDog (name) {
  CAnimal.call(this, name, 'DOG')
}

CDog.prototype = Object.create(CAnimal.prototype)
// Object.setPrototypeOf(CDog, CAnimal.prototype)

CDog.prototype.greet = function () {
  console.log('hi from dog', this.name)
}

let minx = new CAnimal('minx')
minx.greet()
minx.base()

let fido = new CDog('fido')
fido.greet()
fido.base()

