import { UserEntity } from "../../entities/userEntity";

export interface IUserRepository {
    create(data: UserEntity): Promise<void>;
    update(id: string, data: UserEntity): Promise<void>;
    findOne(id: string): Promise<UserEntity>;
    findMany(): Promise<UserEntity[]>;
}