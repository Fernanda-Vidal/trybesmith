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

  public async placeAndOrder(productsIds: number[], userId: number): Promise<void> {
    const orderId = await this.model.placeAnOrder(userId);
    await Promise.all(productsIds
      .map((id) => this.model.updateProducts(id, orderId)));
  }
}