import express from 'express'
import { userRouter } from './routes/user.routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', userRouter)

app.listen(port, () => {
    console.log(`Express app running in port: ${port}`)
})
