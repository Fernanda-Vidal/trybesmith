import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils.ts/HttpException';
import validation from '../utils.ts/validation';

function productMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  
  const isInvalidName = validation(name, 'name');
  if (isInvalidName) throw new HttpException(isInvalidName.message, isInvalidName.status);

  const isInvalidAmount = validation(amount, 'amount');
  if (isInvalidAmount) throw new HttpException(isInvalidAmount.message, isInvalidAmount.status);
  //   console.log(validation);

  //   if (!name) throw new HttpException('"name" is required', StatusCodes.BAD_REQUEST);
  //   if (typeof name !== 'string') {
  //     throw new HttpException('"name" must be a string', StatusCodes.UNPROCESSABLE_ENTITY);
  //   }
  //   if (name.length < 3) {
  //     const err = '"name" length must be at least 3 characters long';
  //     throw new HttpException(err, StatusCodes.UNPROCESSABLE_ENTITY);
  //   }
  
  next();
}

export default productMiddleware;