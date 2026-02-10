import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes";
import leadsRoutes from "./routes/leads.routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/products", productsRoutes);
app.use("/api/leads", leadsRoutes);
