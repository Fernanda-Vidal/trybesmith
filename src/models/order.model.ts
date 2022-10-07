import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAllOrders(): Promise<IOrder[]> {
    const result = await this.connection.execute(
      `SELECT o.id, JSON_ARRAYAGG(p.orderId) AS productsIds, o.userId
      FROM Trybesmith.Orders AS o
      JOIN Trybesmith.Products AS p
      ON o.id = p.orderId
      GROUP BY p.orderId;`,
    );
    const [rows] = result;
    return rows as IOrder[];
  }
}