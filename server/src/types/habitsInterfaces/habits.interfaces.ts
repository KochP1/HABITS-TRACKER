import { Habit } from "@models/habit.model";

interface CreateHabit {
    name: string
    color: string
    question: string
    frequency: string
    type: string
};

interface CreateMeasurableHabit {
    name: string
    color: string
    question: string
    frequency: string
    unit: string
    target: number
    target_type: string
    type: string
}

export interface IHabitService {
    createHabit(data: CreateHabit): Promise<Habit>
    createMeasurableHabit(data: CreateMeasurableHabit): Promise<Habit>
}