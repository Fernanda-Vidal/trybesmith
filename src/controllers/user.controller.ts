import { Request, Response } from 'express';
import UserService from '../services/user.service';
import StatusCodes from '../utils.ts/StatusCodes';

export default class UserController {
  private service: UserService;
  
  constructor() {
    this.service = new UserService();
  }

  public createUser = async (req: Request, res: Response) => {
    const token = await this.service.createUser(req.body);
    res.status(StatusCodes.CREATED).json({ token });
  };
}