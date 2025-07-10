import express from 'express';
import { createTrackingController } from '../controllers/tracking.controller'
import { authenticate } from '../middleware/auth.middleware'

export const trackingRouter = express.Router();

trackingRouter.post('/', authenticate, createTrackingController)