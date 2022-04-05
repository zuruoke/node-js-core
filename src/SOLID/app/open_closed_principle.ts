export class BankAccount {
    rate: number = 0
    constructor(rate: number) {
        this.rate = rate
    }

    public async calculateSavings() {
        return 0.65 * this.rate
    }
}

export class SavingsAccount extends BankAccount {
    constructor(rate: number) {
        super(rate)
    }

    public async calculateSavings(): Promise<number> {
        return (0.86 * this.rate) + 14.7
    }
}

export class CurrentAccount extends BankAccount {
    constructor(rate: number) {
        super(rate)
    }

    public async calculateSavings(): Promise<number> {
        return (1.4 * this.rate) + 1
    }
}


const savings = new SavingsAccount(4.0)
const current = new CurrentAccount(0.7)

savings.calculateSavings().then((res: number) => {
    console.log(res)
})

current.calculateSavings().then((res: number) => {
    console.log(res)
})

