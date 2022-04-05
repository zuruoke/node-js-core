"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = exports.SavingsAccount = exports.BankAccount = void 0;
class BankAccount {
    constructor(rate) {
        this.rate = 0;
        this.rate = rate;
    }
    calculateSavings() {
        return __awaiter(this, void 0, void 0, function* () {
            return 0.65 * this.rate;
        });
    }
}
exports.BankAccount = BankAccount;
class SavingsAccount extends BankAccount {
    constructor(rate) {
        super(rate);
    }
    calculateSavings() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0.86 * this.rate) + 14.7;
        });
    }
}
exports.SavingsAccount = SavingsAccount;
class CurrentAccount extends BankAccount {
    constructor(rate) {
        super(rate);
    }
    calculateSavings() {
        return __awaiter(this, void 0, void 0, function* () {
            return (1.4 * this.rate) + 1;
        });
    }
}
exports.CurrentAccount = CurrentAccount;
const savings = new SavingsAccount(4.0);
const current = new CurrentAccount(0.7);
savings.calculateSavings().then((res) => {
    console.log(res);
});
current.calculateSavings().then((res) => {
    console.log(res);
});
