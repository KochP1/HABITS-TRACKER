import {Request, Response} from 'express'
import { UserService } from "services/user.service";

const userService = new UserService();


export const createUserController = async (req: Request, res: Response) => {
    try {
        const { names, last_names, email, password} = req.body;

        if (!names || !last_names || !email || !password) return res.status(400).json({error: 'All fields are required'});

        const user = await userService.createUser(req.body);
        return res.status(201).json({message: 'User created', userId: user.id})
    } catch(err) {
        console.error(err);
        return res.status(500).json({error: 'There was an error creating the user: ', err});
    }
}