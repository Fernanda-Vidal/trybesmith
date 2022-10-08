import dotenv from 'dotenv';
import jwt, { SignOptions, Secret, JwtPayload } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

dotenv.config();
const PASSWORD = process.env.JWT_SECRET;

const generateToken = (user: Omit<IUser, 'classe' | 'level' | 'password'>): string => {
  const { id, username } = user;
  const payload = { id, username };
  const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };
  const token = jwt
    .sign(payload, PASSWORD as Secret, jwtConfig as SignOptions);

  return token;
};

export const validateToken = (token: string) => {
  try {
    const validate = jwt.verify(token, PASSWORD as Secret);
    return validate as JwtPayload;
  } catch (error) {
    return false;
  }
};

export default generateToken;