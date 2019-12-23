"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = console.log;
let shared = {
    state: 'ready'
};
exports.shared = shared;
class Pig {
    constructor(name) {
        this.state = 'new';
        this.where = 'farm';
        this.name = name;
    }
    static oink() {
        log('static oink');
    }
    classState() {
        log(shared.state); // module value
    }
    showState() {
        log('- state');
        log('  shared.state         =>', shared.state);
        log(`  instance ${this.name} .state =>`, this.state);
        log(`  instance ${this.name} .where =>`, this.where);
        // @ts-ignore
        log(`  Pig .where =>`, Pig.where);
    }
    sleep() {
        log('instance goes to sleep');
        this.state = 'sleep';
    }
    // instance
    setState(newState) {
        this.state = newState;
    }
}
exports.Pig = Pig;
Pig.prototype.where = 'Pig';
Pig.oink();
const pig = new Pig('single'); // singleton like instance
exports.pig = pig;
