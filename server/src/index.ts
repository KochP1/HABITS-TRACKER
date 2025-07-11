import express from 'express'
import { userRouter } from './routes/user.routes';
import { habitRouter } from './routes/habit.routes';
import { trackingRouter } from './routes/tracking.routes'
import { authRouter } from './routes/auth.routes'
import { setupAssociations } from './models/associations';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', userRouter)
app.use('/api/habits', habitRouter)
app.use('/api/tracking', trackingRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log(`Express app running in port: ${port}`)
})

setupAssociations();
