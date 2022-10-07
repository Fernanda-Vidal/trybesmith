import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import generateToken from '../utils.ts/JWT';

export default class LoginService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }
  
  public async login(user: IUser) {
    const { username, password } = user;
    const userExists = await this.model.getUser({ username, password });

    if (!userExists) throw new Error('Username or password invalid');

    return generateToken(user);
  }
}