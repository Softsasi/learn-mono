import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "mysecretpassword",
  database: "blog_db",
});


export const result = await pool.query("SELECT NOW()");
