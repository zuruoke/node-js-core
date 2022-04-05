import EventEmitter from "events"
import { CustomEvent } from "./events"

const eventModule = new CustomEvent()


export const callEvent = () => {

    // eventModule.on('guard', (arg) => {
    //     eventModule.checkNumber(arg.data)
    // })

    eventModule.addListener('guard', (arg) => {
        eventModule.checkNumber(arg.data)
    })
    eventModule.on('error', (err) => {
        console.error(`whoops! An ${err} occured`);
    })

    eventModule.getHello(8990)

    eventModule.emit('once')
}




