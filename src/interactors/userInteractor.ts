import { UserEntity } from "../entities/userEntity";
import { IUserInteractor } from "../interfaces/users/IUserInteractor";
import { IUserRepository } from "../interfaces/users/IUserRepository";
import { User } from "../models/userModel";

export class UserInteractor implements IUserInteractor {

    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    };

    async createUser(input: any) {
        try {
            const { username, email, password } = input;
            const data = new UserEntity(username, email, password);
            await this.repository.create(data);
        } catch (error: Error | any) {
            throw new Error(error?.message ?? 'Something went wrong!');
        }
    }
    async updateUser(id: string, updates: any) {
        try {
            const { username, email } = updates;
            const data = new UserEntity(username, email);
            await this.repository.update(id, data);
        } catch (error: Error | any) {
            throw new Error(error?.message ?? 'Something went wrong!');
        }
    }

    async getUser(id: string) {
        try {
            const result: UserEntity = await this.repository.findOne(id);
            return result;
        } catch (error: Error | any) {
            throw new Error(error?.message ?? 'Something went wrong!');
        }
    }
    
}