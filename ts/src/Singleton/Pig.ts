
const log = console.log

let shared = {
  state: 'ready'
}

class Pig {

  state: string = 'new'
  name: string
  // where: string // = 'farm'

  constructor(name: string) {
    this.name = name
  }

  static oink() {
    log('static oink')
  }

  classState() {
    log(shared.state)  // module value
  }

  showState() {
    log('- state')
    log('  shared.state         =>', shared.state)
    log(`  instance ${ this.name } .state =>`, this.state)

    // @ts-ignore
    log(`  instance ${ this.name } .where =>`, this.where)
    // @ts-ignore
    log(`  Pig .where =>`, Pig.where)
  }

  sleep() {
    log('instance goes to sleep')
    this.state = 'sleep'
  }

  // instance
  setState(newState: string) {
    this.state = newState
  }

}

// @ts-ignore
Pig.prototype.where = 'earth'

Pig.oink()


const pig = new Pig('single') // singleton like instance
// pig.oink()

export {
  Pig, pig, shared
}
