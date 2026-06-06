import express, { type Request, type Response } from 'express';
import getEnv from "./utils/getEnv.js"

const env = getEnv()
const PORT = env.PORT ?? 5566
const app = express()
const nova = 123

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

