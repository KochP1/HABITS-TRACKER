import { Request, RequestHandler, Response } from "express";
import { TrackingService } from "../services/tracking.services";

const trackingService = new TrackingService();

export const createTrackingController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { habits_id, date, done} = req.body;

        if (!habits_id || !date || !done) {
            res.status(400).json({error: 'All fields are required'});
            return;
        }

        const tracker = await trackingService.createTracking(req.body);
        res.status(201).json({message: 'Tracking created', trackingId: tracker.id})
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error creating the trcker for the habit'})
    }
}