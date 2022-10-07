import { Request, Response, NextFunction } from 'express';

function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) throw Error('"username" is required');
  if (!password) throw Error('"password" is required');

  next();
}

export default loginMiddleware;