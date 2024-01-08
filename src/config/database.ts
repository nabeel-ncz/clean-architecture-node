import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/userModel";

class Database {
    public sequelize: Sequelize | undefined;
    private POSTGRES_DB = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER = process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;

    constructor() {
        this.connectToPostgres();
    }

    private async connectToPostgres() {
        this.sequelize = new Sequelize({
            database: this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: String(this.POSTGRES_PASSWORD),
            host: this.POSTGRES_HOST,
            port: this.POSTGRES_PORT,
            dialect: 'postgres',
            models: [User]
        });

        this.sequelize
            .authenticate()
            .then(() => {
                console.log('Successfully connected to database');
            })
            .catch((error) => {
                console.log('Unable to connect to the database', error);
            })
    }
}

export default Database;