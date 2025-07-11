import express from 'express';
import { createTrackingController, updateTrackingController } from '../controllers/tracking.controller'
import { authenticate } from '../middleware/auth.middleware'

export const trackingRouter = express.Router();

trackingRouter.post('/', authenticate, createTrackingController);
trackingRouter.patch('/:id', authenticate, updateTrackingController);