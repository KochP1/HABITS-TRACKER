import {Request, RequestHandler, Response} from 'express'
import { HabitService } from "../services/habit.services";

const habitService = new HabitService();

export const createHabitController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { name, color, question, frequency, type} = req.body;

        if (!name || !color || !question || !frequency || !type) {
            res.status(400).json({error: 'All fields are required'});
            return;
        }

        const habit = await habitService.createHabit(req.body);
        res.status(201).json({message: 'Habit created', habitId: habit.id});
        return;
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error creating the habit'});
        return;
    }
}
