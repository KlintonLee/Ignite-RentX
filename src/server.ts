import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use('/v1', routes);

app.listen(3333, () => 'Servidor rodando');
