"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEvent = void 0;
const events_1 = __importDefault(require("events"));
class CustomEvent extends events_1.default {
    constructor(name) {
        super();
        this.getHello = (num) => {
            this.emit('guard', { data: num });
        };
        this.checkNumber = (val) => {
            if (val % 2 === 0)
                console.log("Even");
            else
                console.log("Odd");
        };
    }
}
exports.CustomEvent = CustomEvent;
