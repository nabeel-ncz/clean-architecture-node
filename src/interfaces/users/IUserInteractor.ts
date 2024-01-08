import { UserEntity } from "../../entities/userEntity";

export interface IUserInteractor {
    createUser(input: any): Promise<void>;
    updateUser(id: string, updates: any): Promise<void>;
    getUser(id: string): Promise<UserEntity>;
}