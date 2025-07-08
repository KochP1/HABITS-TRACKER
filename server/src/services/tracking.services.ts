import { Tracking } from "../models/tracking.model";
import { ITrackingService } from "../types";

export class TrackingService implements ITrackingService {
    async createTracking(data: {habits_id: number, date: string, done: string}): Promise<Tracking> {
        return await Tracking.create(data);
    }
}