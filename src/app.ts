import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { globalErrorHandler } from './middlewares/globalErrorHandeler';
import { notFound } from './middlewares/notFound';
import router from './app/routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};
app.get('/', test);

app.use(globalErrorHandler);

//Not found
app.use(notFound);

export default app;
