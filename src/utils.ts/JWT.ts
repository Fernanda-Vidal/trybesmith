import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

dotenv.config();

const generateToken = (user: IUser) => {
  const { id, username, classe, level } = user;
  const password = process.env.JWT_SECRET;
  const jwtConfig = { expiresIn: '1h' };
  const token = jwt.sign({ id, username, classe, level }, password as string, jwtConfig);
  return token;
};

export default generateToken;