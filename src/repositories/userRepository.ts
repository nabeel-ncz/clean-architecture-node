import { User } from "../models/userModel";
import { UserEntity } from "../entities/userEntity";
import { IUserRepository } from "../interfaces/users/IUserRepository";

export class UserRepository implements IUserRepository {
    async create({ username, email, password }: UserEntity): Promise<void> {
        try {
            const newUser = new User({
                username,
                email,
                password
            });
            if (!newUser) throw new Error('User creation failed');
            await newUser.save();
        } catch (error) {
            throw new Error('User creation failed');
        }
    }
    async update(id: string, { username, email }: UserEntity): Promise<void> {
        try {
            await User.update(
                {
                    username,
                    email
                },
                {
                    where: { id: id }
                }
            )
        } catch (error) {
            throw new Error('Update user failed');
        }
    }
    async findOne(id: string): Promise<UserEntity> {
        try {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found!');
            else return user;
        } catch (error) {
            throw new Error('Error finding user');
        }
    }
    findMany(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

}