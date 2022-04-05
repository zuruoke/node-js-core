import cluster from 'cluster';
import http from 'http';
import { cpus } from 'os';
import process from 'process';
import url from "url"


export const numCPUs = cpus().length;
let numReqs = 0

if (cluster.isPrimary) {
    console.log(`${process.pid} is running and it is the main thread`);
    console.log(cluster.workers)

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }


    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork()
    });

    cluster.on("listening", (worker: any, code: any, signal: any) => {
        console.log(`worker ${worker.process.pid} is listening`)
    })
}




else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    const server = http.createServer((req: any, res: any) => {
        // Parse the request url
        const reqUrl = url.parse(req.url, true).pathname
        // Compare our request method
        if (req.method === "GET") {
            if (reqUrl === "/") {
                const result = fib(8)
                const payload = `fibonacci number is ${result.toString()} and served by server ${process.pid}`
                res.write(payload)
                res.end()
            }
            else if (reqUrl === "/hello") {
                const result = fib(60)
                const payload = `fibonacci number is ${result.toString()} and served by server ${process.pid}`
                res.write(payload)
                res.end()
            }
            else if (reqUrl === "/read") {
                // process.send({ cmd: 'notifyRequest' })
            }

        }
    })
    server.listen(8000);
    console.log(`Worker ${process.pid} started`);

}

const messageHandler = (msg: any) => {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
        numReqs += 1;
    }
}


const fib = (n: number): number => {
    if (n === 0) {
        return 0
    }
    else if (n === 1 || n === 2) {
        return 1
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}