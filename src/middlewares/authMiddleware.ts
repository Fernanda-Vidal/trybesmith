import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils.ts/HttpException';
import { validateToken } from '../utils.ts/JWT';
import StatusCodes from '../utils.ts/StatusCodes';

export default function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) throw new HttpException('Token not found', StatusCodes.UNAUTHORIZED);

  const userAuth = validateToken(authorization);
  if (userAuth) {
    req.body.token = userAuth.id;
    next();
  } else throw new HttpException('Invalid token', StatusCodes.UNAUTHORIZED);
}