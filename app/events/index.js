"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callEvent = void 0;
const events_1 = require("./events");
const eventModule = new events_1.CustomEvent();
const callEvent = () => {
    // eventModule.on('guard', (arg) => {
    //     eventModule.checkNumber(arg.data)
    // })
    eventModule.addListener('guard', (arg) => {
        eventModule.checkNumber(arg.data);
    });
    eventModule.on('error', (err) => {
        console.error(`whoops! An ${err} occured`);
    });
    eventModule.getHello(8990);
    eventModule.emit('once');
};
exports.callEvent = callEvent;
