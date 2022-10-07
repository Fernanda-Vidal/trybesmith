import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import productMiddleware from '../middlewares/productMiddleware';

const router = Router();

const productController = new ProductController();

router.post('/', productMiddleware, productController.createProduct);
router.get('/', productController.getAllProducts);

export default router;