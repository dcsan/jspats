const log = console.log

let store = {
  name: 'da_store',
  data: {
    one: 'item one',
    two: 'second item'
  },

  get(key: string): any {
    // @ts-ignore
    let val = this[key]
    if (val) {
      log('.get(', key, ') =>', val)
      return val
    }
    // else
    console.error('could not get', key)
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Object.defineProperty(store, 'random3', {value: 'this is prop random3'})

const handler = {
  get: (target: any, key: any) => {
    let val = target[key]
    if (val) {
      log('proxy intercepted get:', key, ' =>', val)
    } else {
      val = target.get(key)
    }
    log('key', key, '=>', val)
    return val
  },

  set: (target: any, key: any, val: any) => {
    log('proxy set', target, key, val)
    return true
  }
}

let p = new Proxy(store, handler)

function main() {
  log('p.name:', p.name)
  log('p.notExist', p.notExist)

  p.ran2 = 'test ran2'
  log('p.random3', p.random3)

  // log('store.get')
}

main()

