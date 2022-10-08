import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils.ts/HttpException';
import { validationNumber, validationString } from '../utils.ts/validation';

export default function userMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body;

  const isInvalidUser = validationString(username, 'username', 3);
  if (isInvalidUser) throw new HttpException(isInvalidUser.message, isInvalidUser.status);

  const isInvalidClass = validationString(classe, 'classe', 3);
  if (isInvalidClass) throw new HttpException(isInvalidClass.message, isInvalidClass.status);

  const isinvalidLevel = validationNumber(level);
  if (isinvalidLevel) throw new HttpException(isinvalidLevel.message, isinvalidLevel.status);

  const isInvalidPass = validationString(password, 'password', 8);
  if (isInvalidPass) throw new HttpException(isInvalidPass.message, isInvalidPass.status);

  next();
}