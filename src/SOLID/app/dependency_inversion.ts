abstract class PaymentService {
    abstract amount: number;
    abstract pay(): number;
    abstract calculateCharge(): number
    abstract renewSubscription(): boolean
    abstract getPaymentHistory(): any[]
}


export class PayPalService extends PaymentService {
    amount: number;
    constructor(amount: number) {
        super(),
            this.amount = amount
    }
    pay(): number {
        return 0.78 * this.amount
    }
    calculateCharge(): number {
        return (0.07 * this.pay()) * 100
    }
    renewSubscription(): boolean {
        if (this.amount < 90) return true
        return false
    }
    getPaymentHistory(): any[] {
        return [
            {
                "payment_gateway": "Paypal",
                "payment": this.pay(),
                "total_charge": this.calculateCharge(),
                "subcription_active": this.renewSubscription(),
            }
        ]
    }
}

export class StripeService extends PaymentService {
    amount: number;

    constructor(amount: number) {
        super()
        this.amount = amount
    }
    pay(): number {
        return 0.60 * this.amount
    }
    calculateCharge(): number {
        return (0.08 * this.pay()) * 100
    }
    renewSubscription(): boolean {
        if (this.amount > 50) return true
        return false
    }
    getPaymentHistory(): any[] {
        return [
            {
                "payment_gateway": "Stripe",
                "payment": this.pay(),
                "total_charge": this.calculateCharge(),
                "subcription_active": this.renewSubscription(),
            }
        ]
    }

}

const stripe = new StripeService(150)
const paypal = new PayPalService(100)

console.log(stripe.getPaymentHistory())
console.log(paypal.getPaymentHistory())