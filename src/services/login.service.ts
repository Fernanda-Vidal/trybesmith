import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import HttpException from '../utils.ts/HttpException';
import generateToken from '../utils.ts/JWT';
import StatusCodes from '../utils.ts/StatusCodes';

export default class LoginService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }
  
  public async login(user: IUser) {
    const { username, password } = user;
    const userExists = await this.model.getUser({ username, password });

    if (!userExists) {
      throw new HttpException('Username or password invalid', StatusCodes.UNAUTHORIZED);
    }

    return generateToken(user);
  }
}