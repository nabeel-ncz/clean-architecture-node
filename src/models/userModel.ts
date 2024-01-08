import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "users",
})
export class User extends Model {
    
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "userId",
    })
    userId!: number;

    @Column({
        type: DataType.STRING(20),
        unique: true,
        field: "username",
    })
    username!: string;

    @Column({
        type: DataType.STRING(100),
        unique: true,
        field: "email",
    })
    email!: string;

    @Column({
        type: DataType.STRING(100),
        field: "password",
    })
    password!: string;
};