import { Request, Response } from "express";
import { pool } from "../api/db";

export async function listLeads(_req: Request, res: Response) {
  try {
    const [rows] = await pool.query("SELECT * FROM leads ORDER BY createdAt DESC");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
}

export async function createLead(req: Request, res: Response) {
  try {
    const { fullName, phone, city, propertyType, message } = req.body;
    const [result] = await pool.query(
      "INSERT INTO leads (fullName, phone, city, propertyType, message) VALUES (?, ?, ?, ?, ?)",
      [fullName, phone, city, propertyType, message]
    );
    res.status(201).json({ id: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit lead" });
  }
}

export async function updateLeadStatus(req: Request, res: Response) {
  try {
    const { status } = req.body;
    await pool.query("UPDATE leads SET status=? WHERE id=?", [status, req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to update lead status" });
  }
}
