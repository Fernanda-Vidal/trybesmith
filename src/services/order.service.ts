import IOrder from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const result = await this.model.getAllOrders();
    return result;
  }
}