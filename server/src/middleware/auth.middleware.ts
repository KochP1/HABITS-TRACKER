import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import { Token } from '../models/token.model';

dotenv.config();

declare global {
    namespace Express {
        interface Request {
            userId?: string | number
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(401).json({error: 'Acces denied, token required'});
        return;
    }

    try {
        const isBlackListed = await Token.findOne({
            where: {
                token: token
            }
        });

        if (isBlackListed) {
            res.status(401).json({error: 'Inavlid token'});
        }

        const secret = process.env.ACCESS_TOKEN_SECRET;

        if (!secret) throw new Error('Invalid token');

        const decoded = jwt.verify(token, secret) as JwtPayload;

        if (typeof decoded == 'string' || !decoded.userId) {
            res.status(401).json({error: 'Invalid token'})
        }
        req.userId = decoded.userId
        next();
    } catch(err) {
        console.error(err)
        res.status(401).json({ error: 'Invalid token' });
        return;
    }
}