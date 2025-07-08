import express from 'express';
import { createTrackingController } from '../controllers/tracking.controller'
export const trackingRouter = express.Router();

trackingRouter.post('/', createTrackingController)