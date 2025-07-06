import express, {Request, Response} from 'express'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hi from express')
})

app.listen(port, () => {
    console.log(`Express app running in port: ${port}`)
})
