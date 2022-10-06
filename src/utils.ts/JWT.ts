import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

dotenv.config();

const generateToken = (user: Omit<IUser, 'password'>) => {
  const password = process.env.JWT_SECRET;
  const token = jwt.sign(user, password as string);
  return token;
};

export default generateToken;