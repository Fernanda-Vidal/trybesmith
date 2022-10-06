import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import generateToken from '../utils.ts/JWT';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: Omit<IUser, 'id'>): Promise<string> {
    const newUser = await this.model.createUser(user);

    const token = generateToken(newUser);
    return token;
  }
}