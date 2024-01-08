import { Router } from "express";
const router: Router = Router();
import UserController from "../controllers/userController";
import { UserInteractor } from "../interactors/userInteractor";
import { UserRepository } from "../repositories/userRepository";

const repository = new UserRepository();
const interactor = new UserInteractor(repository)
const controller = new UserController(interactor);

router.route('/')
    .post(controller.onCreateUser.bind(controller))
    .patch(controller.onUpdateUser.bind(controller));

router.route('/:id')
    .get(controller.onGetUser.bind(controller));

export default router;