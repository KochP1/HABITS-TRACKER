import jwt from 'jsonwebtoken'
import { StringValue } from 'ms'
import User from "../models/user.model";

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
}