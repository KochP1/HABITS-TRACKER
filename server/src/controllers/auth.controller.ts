import { Request, RequestHandler, Response } from "express";
import { AuthService } from "../services/auth.services";
import bcrypt from 'bcryptjs';

const authService = new AuthService();

export const loginController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({error: 'All fields are requred'});
            return;
        };

        const user = await authService.login(email);

        if (!user) {
            res.status(404).json({error: 'User not found'});
            return;
        };

        const passwordIsValid = bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
            res.status(401).json({error: 'Invalid credentials'});
            return;
        };

        const token = await authService.createJwt(user.id);

        res.status(200).json({user: {
            names: user.names,
            lastNames: user.last_names,
            email: user.email,
        }, jwt: token});

    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error authenticating the user'});
        return;
    }
}

export const logOutController: RequestHandler = async (req: Request, res: Response) => {
    try {
        const authHeader = req.header('Authorization');
        const token = authHeader?.replace('Bearer ', '');

        if (!token) {
            res.status(400).json({ error: 'Token no proporcionado' });
            return;
        }

        await authService.logout(token)
        res.json({ message: 'Sesión cerrada exitosamente' });
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'There was an error login out the user'});
        return;
    }
}