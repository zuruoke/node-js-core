import cors from "cors"
import express, { Router, Request, Response } from "express"



export const app = express()

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

app.use(cors(
    corsOptions
))

const router = Router()

const getAuthHello = async (req: Request, res: Response) => {
    res.status(200).send("Welcome!!")
}

router.get("/hello",
    getAuthHello
)

app.use("/auth", [],
    router
)

