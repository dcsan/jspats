"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = console.log;
const Pig_1 = require("./Pig");
const PigMethods_1 = require("./PigMethods");
log('Pig.shared', Pig_1.shared);
Pig_1.pig.setState('woke');
Pig_1.pig.showState();
Pig_1.pig.setState('hungry');
Pig_1.pig.showState();
log('pig.state', Pig_1.pig.state);
//
PigMethods_1.checkState();
log('pig.state', Pig_1.pig.state);
PigMethods_1.mutateState();
Pig_1.pig.showState();
//
const pig2 = new Pig_1.Pig('pig2');
pig2.showState();
pig2.setState('fed');
pig2.showState();
Pig_1.pig.showState();
log(Pig_1.shared);
