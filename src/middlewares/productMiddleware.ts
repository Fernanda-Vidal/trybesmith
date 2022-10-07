import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils.ts/HttpException';
import validation from '../utils.ts/validation';

function productMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  
  const isInvalidName = validation(name, 'name');
  if (isInvalidName) throw new HttpException(isInvalidName.message, isInvalidName.status);

  const isInvalidAmount = validation(amount, 'amount');
  if (isInvalidAmount) throw new HttpException(isInvalidAmount.message, isInvalidAmount.status);  
  
  next();
}

export default productMiddleware;