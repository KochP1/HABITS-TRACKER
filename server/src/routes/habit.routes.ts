import express from 'express'
import { createHabitController } from '../controllers/habit.controller';

export const habitRouter = express.Router();

habitRouter.post('/', createHabitController);
//habitRouter.get('/');
//habitRouter.delete('/:id');
//habitRouter.patch('/:id')
//habitRouter.post('/measurable_habit')