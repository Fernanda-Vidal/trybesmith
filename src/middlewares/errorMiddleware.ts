import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils.ts/HttpException';

function errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { status, message } = err as HttpException;

  res.status(status || 500).json({ message });

  // switch (message) {
  //   case 'Username or password invalid':
  //     res.status(StatusCodes.UNAUTHORIZED).json({ message });
  //     break;
  //   case '"password" is required':
  //     res.status(StatusCodes.BAD_REQUEST).json({ message });
  //     break;
  //   case '"username" is required':
  //     res.status(StatusCodes.BAD_REQUEST).json({ message });
  //     break;
  //   case '"name" is required':
  //     res.status(StatusCodes.BAD_REQUEST).json({ message });
  //     break;
  //   default:
  //     console.log(err);
  //     res.sendStatus(StatusCodes.UNKNOWN_ERROR);
  // }
}

export default errorMiddleware;