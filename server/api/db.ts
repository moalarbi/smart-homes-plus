import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

export const pool = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT || 3306),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

export async function dbHealthCheck() {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    return rows;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}
