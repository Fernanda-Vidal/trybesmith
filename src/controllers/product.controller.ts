import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import StatusCodes from '../utils.ts/StatusCodes';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public createProduct = async (req: Request, res: Response) => {
    const product = await this.service.create(req.body);
    res.status(StatusCodes.CREATED).json(product);
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    const product = await this.service.getAllProducts();
    res.status(StatusCodes.OK).json(product);
  };
}