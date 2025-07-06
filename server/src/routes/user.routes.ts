import express from 'express'
import { createUserController } from '../controllers/user.controller';
export const userRouter = express.Router();

userRouter.post('/create_user', createUserController);