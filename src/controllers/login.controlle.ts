import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import StatusCodes from '../utils.ts/StatusCodes';
import 'express-async-errors';

export default class LoginController {
  private service: LoginService;
  
  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const token = await this.service.login(req.body);

    return res.status(StatusCodes.OK).json({ token });
  };
}