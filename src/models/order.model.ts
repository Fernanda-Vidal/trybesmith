import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async placeAnOrder(userId: number):
  Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders(userId) VALUES (?)',
      [userId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return insertId;
  }

  public async updateProducts(productId: number, orderId: number): Promise<void> {
    await this.connection.execute(
      `UPDATE Trybesmith.Products
      SET orderId = ?
      WHERE id = ?`,
      [orderId, productId],
    );
  }
}