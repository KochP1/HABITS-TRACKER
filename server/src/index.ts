import express from 'express'
import { userRouter } from './routes/user.routes';
import { habitRouter } from './routes/habit.routes';
import { trackingRouter } from './routes/tracking.routes'

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', userRouter)
app.use('/api/habits', habitRouter)
app.use('/api/tracking', trackingRouter)

app.listen(port, () => {
    console.log(`Express app running in port: ${port}`)
})
