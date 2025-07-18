import User from "../models/user.model";
import { IUserService } from "../types/index";

export class UserService implements IUserService {
    async createUser(data: {names: string, last_names: string, email: string, password: string}): Promise<User>{
        return await User.create(data);
    }

    async deleteUser(id: number): Promise<boolean> {
        const user = await User.findByPk(id);

        if (!user) return false;

        await user.destroy();
        
        return true
    }

    async getUserById(id: number): Promise<User | null> {
        const user = await User.findByPk(id);

        if (!user ) {
            return null;
        }

        return user;
    }

    async updateUser(id: number, data: {names?: string, last_names?: string, email?: string, password?: string }): Promise<User | null> {
        const user = await User.findByPk(id);

        if (!user) return null;

        return await user.update(data);

    }
}