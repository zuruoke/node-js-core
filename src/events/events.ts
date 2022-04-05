import EventEmitter from "events";

export class CustomEvent extends EventEmitter {

    constructor(name?: string | undefined) {
        super()
    }

    public getHello = (num: number) => {
        this.emit('guard', { data: num })
    }

    public checkNumber = (val: number) => {
        if (val % 2 === 0)
            console.log("Even")
        else console.log("Odd")
    }

}
