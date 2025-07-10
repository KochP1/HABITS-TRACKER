import jwt from 'jsonwebtoken'
import { StringValue } from 'ms'
import User from "../models/user.model";
import { Token } from '../models/token.model';

export class AuthService {
    async createJwt(id: number) {

        const secret = process.env.ACCESS_TOKEN_SECRET;

        if (!secret) throw new Error('ACCESS_TOKEN_SECRET is undefined');


        const accessToken = jwt.sign(
            {
                userId: id
            }, 

            secret,

            {
                expiresIn: (process.env.ACCESS_TOKEN_EXPIRES_IN as StringValue | number ) || '1h'

            }
        );

        return accessToken;

    }

    async login(email:string) {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        return user;
    }

    async saveToken(token: string, time: number) {
        return await Token.create({
            token: token,
            types: 'jwt',
            expires_at: new Date(time * 1000)
        });
    }

    async logout(token: string) {
        if(!token) {
            throw new Error('Token not found');
        }

        const decoded = jwt.decode(token);

        if (!decoded || typeof decoded === 'string' || !decoded.exp) {
            throw new Error('Token inválido o sin expiración');
        }

        return await this.saveToken(token, decoded.exp)

    }
}