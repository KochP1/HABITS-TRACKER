import { Habit } from "../models/habit.model";
import { IHabitService } from "../types/habitsInterfaces/habits.interfaces";

export class HabitService implements IHabitService {
    async createHabit(data: {user_id: number, name: string, color: string, question: string, frequency: string, type: string}): Promise<Habit> {
        return await Habit.create(data);
    }

    async createMeasurableHabit(data: {user_id: number, name: string, color: string, question: string, frequency: string, unit: string, target: number, target_type: string, type: string}): Promise<Habit> {
        return await Habit.create(data);
    }

    async deleteHabit(id: number): Promise<boolean> {
        const habit = await Habit.findByPk(id);

        if (!habit) return false;

        await habit.destroy();
        return true
    }

    async getHabitByUserId(id: number): Promise<Habit[]> {
        const habits = await Habit.findAll({
            where: {
                user_id: id
            }
        })

        return habits;
    }
}