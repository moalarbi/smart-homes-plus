import { Request, Response } from "express";
import { pool } from "../api/db";

export async function listProducts(_req: Request, res: Response) {
  try {
    const [rows] = await pool.query("SELECT * FROM products ORDER BY id DESC");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}

export async function getProduct(req: Request, res: Response) {
  try {
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [req.params.id]);
    const item = (rows as any[])[0];
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, price, category, description, imageUrl } = req.body;
    const [result] = await pool.query(
      "INSERT INTO products (name, price, category, description, imageUrl) VALUES (?, ?, ?, ?, ?)",
      [name, price, category, description, imageUrl]
    );
    res.status(201).json({ id: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const { name, price, category, description, imageUrl } = req.body;
    await pool.query(
      "UPDATE products SET name=?, price=?, category=?, description=?, imageUrl=? WHERE id=?",
      [name, price, category, description, imageUrl, req.params.id]
    );
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    await pool.query("DELETE FROM products WHERE id=?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
}
