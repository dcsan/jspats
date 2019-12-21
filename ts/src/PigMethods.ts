const log = console.log

import { Pig, pig } from './Pig'

log('Pig.proto.showState', Pig.prototype.showState)

function checkState() {
  pig.showState()
}

function mutateState() {
  pig.sleep()
  pig.showState()
}

export { checkState, mutateState }

