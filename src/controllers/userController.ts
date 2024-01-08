import { Request, Response, NextFunction } from "express";
import { IUserInteractor } from "../interfaces/users/IUserInteractor";
import bcrypt from "bcrypt";

class UserController {

    private interactor: IUserInteractor;

    constructor(interactor: IUserInteractor) {
        this.interactor = interactor;
    }

    async onCreateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { username, email, password } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            await this.interactor.createUser({
                username,
                email,
                password: hash
            });
            res.status(201).json({ success: true });
        } catch (error) {
            next(error);
        }
    }
    async onUpdateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, username, email } = req.body;
            await this.interactor.updateUser(id, { username, email });
            res.status(200).json({ success: true });
        } catch (error) {
            next(error);
        }
    }
    async onGetUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params?.id;
            const result = await this.interactor.getUser(userId);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;