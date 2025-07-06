import express from 'express'
import { createUserController, deleteUserControlle } from '../controllers/user.controller';
export const userRouter = express.Router();

userRouter.post('/create_user', createUserController);
userRouter.delete('/delete_user/:id', deleteUserControlle)