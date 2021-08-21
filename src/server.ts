import express from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import { routes } from './routes';
import swaggerDoc from './swagger.json';

const app = express();

app.use(express.json());
app.use('/v1', routes);
app.use('/swagger', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDoc));

app.listen(3333, () => 'Servidor rodando');
