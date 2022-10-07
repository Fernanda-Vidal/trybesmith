import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(user:Omit<IUser, 'id'>): Promise<IUser> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async getUser(user: Omit<IUser, 'classe' | 'level'>):
  Promise<Omit<IUser, 'classe' | 'level'>> {
    const { username, password } = user;
    const [[row]] = await this.connection.execute<(
    IUser & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],    
      );
    return row;
  }
}