"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const writableStream = new stream_1.Stream.Writable();
writableStream._write = () => {
};
const readableStream = new stream_1.Stream.Readable();
readableStream._read = () => {
};
