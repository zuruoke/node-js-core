"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const url_1 = __importDefault(require("url"));
const string_decoder_1 = require("string_decoder");
exports.server = http_1.default.createServer((req, res) => {
    var _a;
    // get the path
    const parsedUrl = url_1.default.parse(req.url, true);
    const path = parsedUrl.pathname;
    // get the query object
    const queryObject = parsedUrl.query;
    // get the path
    const queryPath = parsedUrl.path;
    // get the request method
    const method = (_a = req.method) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    // get the headers
    const headers = req.headers;
    // get the payload if any
    const decoder = new string_decoder_1.StringDecoder('utf-8');
    // since payload sent by the client is sent as a stream, so we need to collect that stream as it comes in
    // and when the stream say it's done we can collate all the bits of data to know the entirety of the data
    let buffer = '';
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(buffer);
    });
});
