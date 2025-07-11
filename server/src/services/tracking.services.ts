import { Tracking } from "../models/tracking.model";
import { Habit } from "../models/habit.model";
import { ITrackingService } from "../types";

export class TrackingService implements ITrackingService {
    async createTracking(data: {habits_id: number, date: string, done: string}): Promise<Tracking> {
        return await Tracking.create(data);
    }

    async updateTracking(habit_id: number | string, id: number, updates: {done: string}): Promise<Tracking | null> {
        const tracker = await Tracking.findOne({
            where: {
                habits_id: habit_id
            },
            include: [{
                model: Habit,
                where: {
                    user_id: id,
                },
                required: true
            }]
        });

        if (!tracker) return null;

        return await tracker.update(updates);
    }
}