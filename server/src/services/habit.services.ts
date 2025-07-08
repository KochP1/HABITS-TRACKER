import { Habit } from "@models/habit.model";
import { IHabitService } from "../types/habitsInterfaces/habits.interfaces";

export class HabitService implements IHabitService {
    async createHabit(data: {name: string, color: string, question: string, frequency: string, type: string}): Promise<Habit> {
        return await Habit.create(data);
    }

    async createMeasurableHabit(data: {name: string, color: string, question: string, frequency: string, unit: string, target: number, target_type: string, type: string}): Promise<Habit> {
        return await Habit.create(data);
    }
}