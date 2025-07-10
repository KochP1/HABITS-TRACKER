import express from 'express'
import { createUserController, deleteUserControlle, getUserByidController, updateUserController } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware'

export const userRouter = express.Router();

userRouter.get('/:id', authenticate, getUserByidController);
userRouter.post('/', createUserController);
userRouter.delete('/:id', authenticate, deleteUserControlle);
userRouter.patch('/:id', authenticate, updateUserController);