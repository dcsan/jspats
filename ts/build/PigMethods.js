"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = console.log;
const Pig_1 = require("./Pig");
log('Pig.proto.showState', Pig_1.Pig.prototype.showState);
function checkState() {
    Pig_1.pig.showState();
}
exports.checkState = checkState;
function mutateState() {
    Pig_1.pig.sleep();
    Pig_1.pig.showState();
}
exports.mutateState = mutateState;
