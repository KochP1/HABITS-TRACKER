import User from "./../../models/user.model"

export interface CreateUser {
    id?: number
    names: string
    last_names: string
    email: string
    password: string
}

interface EditUser {
    names?: string
    last_names?: string
    email?: string
}

interface EditPassword {
    actual_password: string
    new_password: string
}

export interface IUserService {
    createUser(data: CreateUser): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    updateUser(id: number, data: EditUser): Promise<User| null>;
    deleteUser(id: number): Promise<boolean>;
}