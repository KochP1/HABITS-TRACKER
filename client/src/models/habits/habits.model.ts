import {z} from "zod";

export const habit_schema = z.object({
    name: z.string().min(1, 'The field is required').max(20, 'The name cannot have more than 20 characters'),
    user_id: z.int(),
    color: z.string(),
    question: z.string().min(1, 'This field is required').max(30, 'The name cannot have more than 30 characters'),
    frequency: z.string().min(1, 'This field is required'),
    type: z.string()
});

export type HabitFormValue = z.infer<typeof habit_schema>;