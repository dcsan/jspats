const log = console.log

import { Pig, pig, shared } from './Pig'
import { checkState, mutateState } from './PigMethods'

log('Pig.shared', shared)


pig.setState('woke')
pig.showState()

pig.setState('hungry')
pig.showState()

log('pig.state', pig.state)

//
checkState()

log('pig.state', pig.state)

mutateState()

pig.showState()

//
const pig2 = new Pig('pig2')
pig2.showState()

pig2.setState('fed')
pig2.showState()

pig.showState()
log(shared)
