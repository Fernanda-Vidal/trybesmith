import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import StatusCodes from '../utils.ts/StatusCodes';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }
  
  public getAllOrders = async (req: Request, res: Response) => {
    const orders = await this.service.getAllOrders();
    res.status(StatusCodes.OK).json(orders);
  };

  public placeAnOrder = async (req: Request, res: Response) => {
    const { productsIds, token } = req.body;

    await this.service.placeAndOrder(productsIds, token);
    return res.status(StatusCodes.CREATED).json({ userId: token, productsIds });
  };
}