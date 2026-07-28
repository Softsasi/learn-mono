import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "mysecretpassword",
  database: "blog_db",
});

await pool.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)");

await pool.query("INSERT INTO users (username, email, password) VALUES ('testuser', 'testuser@example.com', 'testpassword')");

export const result = await pool.query("SELECT NOW()");
