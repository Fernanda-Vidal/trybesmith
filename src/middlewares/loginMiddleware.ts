import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils.ts/HttpException';
import StatusCodes from '../utils.ts/StatusCodes';

function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) throw new HttpException('"username" is required', StatusCodes.BAD_REQUEST);
  if (!password) throw new HttpException('"password" is required', StatusCodes.BAD_REQUEST);

  next();
}

export default loginMiddleware;