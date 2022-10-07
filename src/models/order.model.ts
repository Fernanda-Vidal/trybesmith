import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAllOrders(): Promise<IOrder[]> {
    const result = await this.connection.execute(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Products AS p
      JOIN Trybesmith.Orders AS o
      ON p.orderId = o.id 
      GROUP BY p.orderId;`,
    );
    const [rows] = result;
    return rows as IOrder[];
  }
}