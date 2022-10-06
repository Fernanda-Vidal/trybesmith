import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import ProductRoutes from './routes/product.routes';

const app = express();

app.use(express.json());
app.use('/products', ProductRoutes);

app.use(errorMiddleware);

export default app;
