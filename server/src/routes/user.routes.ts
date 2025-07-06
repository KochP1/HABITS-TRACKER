import express from 'express'
import { createUserController, deleteUserControlle, getUserByidController } from '../controllers/user.controller';
export const userRouter = express.Router();

userRouter.get('/:id', getUserByidController)
userRouter.post('/', createUserController);
userRouter.delete('/:id', deleteUserControlle)