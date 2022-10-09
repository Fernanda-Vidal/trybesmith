import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils.ts/HttpException';
import StatusCodes from '../utils.ts/StatusCodes';

export default function orderMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  if (!productsIds) {
    throw new HttpException('"productsIds" is required', StatusCodes.BAD_REQUEST);
  }

  if (Array.isArray(productsIds) === false) {
    throw new HttpException('"productsIds" must be an array', StatusCodes.UNPROCESSABLE_ENTITY);
  }

  if (productsIds.length < 1) {
    const err = '"productsIds" must include only numbers';
    throw new HttpException(err, StatusCodes.UNPROCESSABLE_ENTITY);
  }
  next();
}