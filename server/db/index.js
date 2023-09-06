import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const user = process.env.POSTGRES_USER;
const host = process.env.POSTGRES_HOST;
const db = process.env.POSTGRES_DB;
const pass = process.env.POSTGRES_PASSWORD;
const port = process.env.PORT;

const { Pool } = pg;

const pool = new Pool({
  user: user,
  host: host,
  database: db,
  password: pass,
  port: port,
});

const dbModule = {
  query: (text, params) => pool.query(text, params),
};

export default dbModule;
