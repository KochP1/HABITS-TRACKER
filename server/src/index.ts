import express from 'express'
import { userRouter } from './routes/user.routes';
import { habitRouter } from './routes/habit.routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', userRouter)
app.use('/api/habits', habitRouter)

app.listen(port, () => {
    console.log(`Express app running in port: ${port}`)
})
