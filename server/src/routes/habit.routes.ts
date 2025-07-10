import express from 'express'
import { createHabitController, createMeasurableHabitController, deleteHabitController, getHabitController, updateHabitController } from '../controllers/habit.controller';
import { authenticate } from '../middleware/auth.middleware'

export const habitRouter = express.Router();

habitRouter.post('/', authenticate, createHabitController);
habitRouter.delete('/:id', authenticate, deleteHabitController);
habitRouter.get('/:id', authenticate, getHabitController)
habitRouter.patch('/:id', authenticate, updateHabitController)
habitRouter.post('/measurable_habit', authenticate, createMeasurableHabitController)