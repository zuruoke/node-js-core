import http from 'http';
import url from "url"
import { StringDecoder } from 'string_decoder';

export const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

    // get the path
    const parsedUrl: url.UrlWithParsedQuery = url.parse(req.url!, true)
    const path = parsedUrl.pathname

    // get the query object

    const queryObject = parsedUrl.query

    // get the path
    const queryPath = parsedUrl.path



    // get the request method

    const method = req.method?.toUpperCase()

    // get the headers

    const headers = req.headers

    // get the payload if any

    const decoder = new StringDecoder('utf-8')
    // since payload sent by the client is sent as a stream, so we need to collect that stream as it comes in
    // and when the stream say it's done we can collate all the bits of data to know the entirety of the data

    let buffer = ''
    req.on('data', (data) => {
        buffer += decoder.write(data)
    })


    req.on('end', () => {
        buffer += decoder.end()
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200)
        res.end(buffer)
    })

})


