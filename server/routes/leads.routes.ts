import { Router } from "express";
import * as ctrl from "../controllers/leads.controller";

const router = Router();

router.get("/", ctrl.listLeads);
router.post("/", ctrl.createLead);
router.put("/:id/status", ctrl.updateLeadStatus);

export default router;
