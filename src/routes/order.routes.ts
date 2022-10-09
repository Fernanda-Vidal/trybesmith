import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import authMiddleware from '../middlewares/authMiddleware';
import orderMiddleware from '../middlewares/orderMiddleware';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAllOrders);
router.post('/', authMiddleware, orderMiddleware, orderController.placeAnOrder);

export default router;