import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../utils.ts/StatusCodes';

function errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { message } = err;

  switch (message) {
    case 'Username or password invalid':
      res.status(StatusCodes.UNAUTHORIZED).json({ message });
      break;
    case '"password" is required':
      res.status(StatusCodes.BAD_REQUEST).json({ message });
      break;
    case '"username" is required':
      res.status(StatusCodes.BAD_REQUEST).json({ message });
      break;
    default:
      console.log(err);
      res.sendStatus(StatusCodes.UNKNOWN_ERROR);
  }
  next();
}

export default errorMiddleware;