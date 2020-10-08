// static methods and properties and hierarchy

class Mouth {
  static greet() {
    console.log('Mouth.greet')
  }
}

class DogMouth extends Mouth {
  static greet() {
    console.log('DogMouth.woof')
  }
}

class CatMouth extends Mouth {
  static greet() {
    console.log('CatMouth.miaow')
  }
}

class Animal {
  // mouth: Mouth

  static builder() {
    return Mouth
  }

  static greet() {
    this.builder().greet()
    Mouth.greet()
  }
}


class Dog extends Animal {

  static builder() {
    return DogMouth
  }

  static greet() {
    this.builder().greet()
    DogMouth.greet()
  }

}


class Cat extends Animal {

  myMouth: CatMouth
  static allMouth = CatMouth

  constructor() {
    super()
    this.myMouth = CatMouth
  }

  builder() {
    return CatMouth
  }

  greet() {
    this.builder().greet()
    Cat.allMouth.greet()

    CatMouth.greet()
  }

}

function main() {
  Dog.greet()
  Cat.greet()

  const cat = new Cat()
  cat.greet()

}

main()
