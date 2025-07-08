import { Habit } from "@models/habit.model";

interface CreateHabit {
    user_id: number
    name: string
    color: string
    question: string
    frequency: string
    type: string
};

interface CreateMeasurableHabit {
    user_id: number
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
    deleteHabit(id: number): Promise<boolean>
    getHabitByUserId(id: number): Promise<Habit[]>
}