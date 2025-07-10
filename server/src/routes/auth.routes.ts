import express from 'express';
import { loginController, logOutController } from '../controllers/auth.controller';
export const authRouter = express.Router();

authRouter.post('/', loginController);
authRouter.post('/log_out', logOutController)