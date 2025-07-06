import {Request, RequestHandler, Response} from 'express'
import { UserService } from "../services/user.service";

const userService = new UserService();


export const createUserController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { names, last_names, email, password} = req.body;

        if (!names || !last_names || !email || !password) {
            res.status(400).json({error: 'All fields are required'});
            return;
        }

        const user = await userService.createUser(req.body);
        res.status(201).json({message: 'User created', userId: user.id})
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error creating the user: ', err});
        return;
    }
}

export const getUserByidController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user_id = parseInt(id);

        const user = await userService.getUserById(user_id);

        if (user == null) {
            res.status(404).json({error: 'User not found'});
            return;
        }

        res.json(user)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'There was an error getting the user: ', err});
        return;                                                                                                 
    }   
}

export const deleteUserControlle: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user_id = parseInt(id)

        const deleted = await userService.deleteUser(user_id);

        if (!deleted) {
            res.status(404).json({error: 'User not found'});
            return;
        }

        res.status(200).json({message: 'User deleted'});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'There was an error creating the user: ', err});
        return;                                                                                                 
    }   
}

export const updateUserController: RequestHandler = async (req: Request, res: Response) => {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error updating the user: ', err});
        return;
    }
}