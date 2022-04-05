import { Stream } from "stream";

const writableStream = new Stream.Writable()

writableStream._write = () => {

}

const readableStream = new Stream.Readable()

readableStream._read = () => {

}