import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import ProductRoutes from './routes/product.routes';
import UserRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);

app.use(errorMiddleware);

export default app;
