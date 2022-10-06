import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAllOrders(): Promise<IOrder[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    const [rows] = result;
    return rows as IOrder[];
  }
}