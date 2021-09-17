import { Pool } from 'pg';
import { config } from './config';

const pool = new Pool({
  user: config.database.username,
  password: config.database.password,
  database: config.database.database,
  host: config.database.host,
  port: config.database.port,
});

export { pool };
