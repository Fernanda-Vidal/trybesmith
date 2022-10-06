import { Request, Response, NextFunction } from 'express';

function errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { name, message } = err;

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'conflictError':
      res.status(409).json({ message });
      break;
    default:
      console.log(err);
      res.sendStatus(500);
  }
  next();
}

export default errorMiddleware;