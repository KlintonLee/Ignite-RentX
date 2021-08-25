import 'dotenv/config';
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUiExpress from 'swagger-ui-express';
import './container';
import { routes } from './routes';
import swaggerDoc from './swagger.json';
import { AppError } from './errors/AppError';

const app = express();

app.use(express.json());
app.use('/v1', routes);
app.use('/swagger', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDoc));

// eslint-disable-next-line no-unused-vars
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      error: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    error: 'Internal Server Error',
  });
});

app.listen(3333, () => 'Servidor rodando');
