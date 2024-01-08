import express, { Application } from "express";
import Database from "./config/database";
import UserRouter from "./routes/usersRouter";
import RecipesRouter from "./routes/recipesRouter";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.database();
        this.plugins();
        this.routes();
    }

    protected database() {
        const db = new Database();
        db.sequelize?.sync();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    protected routes(): void {
        this.app.use('/api/user', UserRouter);
        this.app.use('/api/recipes', RecipesRouter);
    }
}

const app: Application = new App().app;
const port: Number | String = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server listening at ${port}`) });

export default App;