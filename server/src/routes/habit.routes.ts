import express from 'express'
import { createHabitController, createMeasurableHabitController, deleteHabitController, getHabitController } from '../controllers/habit.controller';

export const habitRouter = express.Router();

habitRouter.post('/', createHabitController);
habitRouter.delete('/:id', deleteHabitController);
habitRouter.get('/:id', getHabitController)
//habitRouter.patch('/:id')
habitRouter.post('/measurable_habit', createMeasurableHabitController)