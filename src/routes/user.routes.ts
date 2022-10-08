import { Router } from 'express';
import UserController from '../controllers/user.controller';
import userMiddleware from '../middlewares/userMiddleware';

const router = Router();

const userController = new UserController();

router.post('/', userMiddleware, userController.createUser);

export default router;