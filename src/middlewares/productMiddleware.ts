import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils.ts/HttpException';
import validationString from '../utils.ts/validation';

function productMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  
  const isInvalidName = validationString(name, 'name');
  if (isInvalidName) throw new HttpException(isInvalidName.message, isInvalidName.status);

  const isInvalidAmount = validationString(amount, 'amount');
  if (isInvalidAmount) throw new HttpException(isInvalidAmount.message, isInvalidAmount.status);  
  
  next();
}

export default productMiddleware;