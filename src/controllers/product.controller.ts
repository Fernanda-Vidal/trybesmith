import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public createProduct = async (req: Request, res: Response) => {
    const product = await this.service.create(req.body);
    res.status(201).json(product);
  };
}