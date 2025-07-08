import {Request, RequestHandler, Response} from 'express'
import { HabitService } from "../services/habit.services";

const habitService = new HabitService();

export const createHabitController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { name, user_id, color, question, frequency, type} = req.body;

        if (!user_id || !name || !color || !question || !frequency || !type) {
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

export const createMeasurableHabitController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { name, user_id, color, question, frequency, unit, target, target_type, type} = req.body;

        if (!user_id || !name || !color || !question || !frequency || !type || !unit || !target || !target_type) {
            res.status(400).json({error: 'All fields are required'});
            return;
        }

        const habit = await habitService.createMeasurableHabit(req.body);
        res.status(201).json({message: 'Habit created', habitId: habit.id});
        return;
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error creating the habit'});
        return;
    }
}

export const deleteHabitController: RequestHandler = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const habitId = parseInt(id);

        const habit = habitService.deleteHabit(habitId);
        if (!habit) {
            res.status(404).json({error: 'Habit not found'})
            return;
        }

        res.status(200).json({message: 'Habit deleted'});
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error deleting the habit'});
        return;
    }
}

export const getHabitController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user_id = parseInt(id)
        const habits = await habitService.getHabitByUserId(user_id)

        if (!habits) {
            res.status(404).json({error: 'You doesnt have any habits'})
        }

        res.json(habits);
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error getting the habits'});
        return;
    }
}
