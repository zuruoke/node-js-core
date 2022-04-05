"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = exports.PayPalService = void 0;
class PaymentService {
}
class PayPalService extends PaymentService {
    constructor(amount) {
        super(),
            this.amount = amount;
    }
    pay() {
        return 0.78 * this.amount;
    }
    calculateCharge() {
        return (0.07 * this.pay()) * 100;
    }
    renewSubscription() {
        if (this.amount < 90)
            return true;
        return false;
    }
    getPaymentHistory() {
        return [
            {
                "payment_gateway": "Paypal",
                "payment": this.pay(),
                "total_charge": this.calculateCharge(),
                "subcription_active": this.renewSubscription(),
            }
        ];
    }
}
exports.PayPalService = PayPalService;
class StripeService extends PaymentService {
    constructor(amount) {
        super();
        this.amount = amount;
    }
    pay() {
        return 0.60 * this.amount;
    }
    calculateCharge() {
        return (0.08 * this.pay()) * 100;
    }
    renewSubscription() {
        if (this.amount > 50)
            return true;
        return false;
    }
    getPaymentHistory() {
        return [
            {
                "payment_gateway": "Stripe",
                "payment": this.pay(),
                "total_charge": this.calculateCharge(),
                "subcription_active": this.renewSubscription(),
            }
        ];
    }
}
exports.StripeService = StripeService;
const stripe = new StripeService(150);
const paypal = new PayPalService(100);
console.log(stripe.getPaymentHistory());
console.log(paypal.getPaymentHistory());
