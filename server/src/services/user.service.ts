import User from "../models/user.model";
import { IUserService } from "../types/index";

export class UserService implements IUserService {
    async createUser(data: {names: string, last_names: string, email: string, password: string}): Promise<User>{
        return await User.create(data);
    }
}