
const log = console.log

let shared = {
  state: 'ready'
}

class Pig {

  state: string = 'new'
  name: string

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
    log(`  instance ${this.name} .state =>`, this.state)
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

Pig.oink()

const pig = new Pig('single') // singleton like instance
// pig.oink()

export {
  Pig, pig, shared
}
