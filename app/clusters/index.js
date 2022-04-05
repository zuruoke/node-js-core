"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numCPUs = void 0;
const cluster_1 = __importDefault(require("cluster"));
const http_1 = __importDefault(require("http"));
const os_1 = require("os");
const process_1 = __importDefault(require("process"));
const url_1 = __importDefault(require("url"));
exports.numCPUs = (0, os_1.cpus)().length;
let numReqs = 0;
if (cluster_1.default.isPrimary) {
    console.log(`${process_1.default.pid} is running and it is the main thread`);
    console.log(cluster_1.default.workers);
    // Fork workers.
    for (let i = 0; i < exports.numCPUs; i++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster_1.default.fork();
    });
    cluster_1.default.on("listening", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} is listening`);
    });
}
else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    const server = http_1.default.createServer((req, res) => {
        // Parse the request url
        const reqUrl = url_1.default.parse(req.url, true).pathname;
        // Compare our request method
        if (req.method === "GET") {
            if (reqUrl === "/") {
                const result = fib(8);
                const payload = `fibonacci number is ${result.toString()} and served by server ${process_1.default.pid}`;
                res.write(payload);
                res.end();
            }
            else if (reqUrl === "/hello") {
                const result = fib(60);
                const payload = `fibonacci number is ${result.toString()} and served by server ${process_1.default.pid}`;
                res.write(payload);
                res.end();
            }
            else if (reqUrl === "/read") {
                // process.send({ cmd: 'notifyRequest' })
            }
        }
    });
    server.listen(8000);
    console.log(`Worker ${process_1.default.pid} started`);
}
const messageHandler = (msg) => {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
        numReqs += 1;
    }
};
const fib = (n) => {
    if (n === 0) {
        return 0;
    }
    else if (n === 1 || n === 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
};
