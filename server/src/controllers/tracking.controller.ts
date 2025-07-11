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

export const updateTrackingController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { done } = req.body;
        const userId = req.userId;

        console.log(id)

        if (!userId || typeof userId == 'string') {
            throw new Error('There was an error retrieving de user id');
        }

        if (!done) {
            res.status(400).json({error: 'Fields are required for update'});
            return;
        }

        const tracker = await trackingService.updateTracking(id, userId, req.body);

        if (tracker == null) {
            res.status(404).json({error: 'Habit tracker not found'});
            return;
        }

        res.status(200).json({message: 'The habit tracker was updated', tracker_id: tracker.id});
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error updating the trcker for the habit'});
        return;
    }
}