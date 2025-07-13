import express from 'express'
import cors from 'cors';
import { userRouter } from './routes/user.routes';
import { habitRouter } from './routes/habit.routes';
import { trackingRouter } from './routes/tracking.routes'
import { authRouter } from './routes/auth.routes'
import { setupAssociations } from './models/associations';

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza con tu URL de frontend
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Si necesitas enviar cookies o headers de autenticación
}));

app.use('/api/users', userRouter)
app.use('/api/habits', habitRouter)
app.use('/api/tracking', trackingRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log(`Express app running in port: ${port}`)
})

setupAssociations();
