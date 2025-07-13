import {z} from "zod";

export const registSchema = z.object({
    names: z.string().min(1, 'You have to introduce a name').max(50, 'The name is too long'),
    last_names: z.string().min(1, 'You have to introduce a last name').max(50, 'The last name is too long'),
    email: z.email().min(1, 'You have to introduce a email').max(50, 'The email is too long'),
    password: z.string().min(1, 'You have to introduce a password').max(10, 'The password is too long'),
})

export type RegistFormValues = z.infer<typeof registSchema>;