import IProduct from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    const result = await this.model.createProduct(product);
    return result;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const result = await this.model.getAllProducts();
    return result;
  }
}