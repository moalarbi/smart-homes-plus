import { Router } from "express";
import * as ctrl from "../controllers/products.controller";

const router = Router();

router.get("/", ctrl.listProducts);
router.get("/:id", ctrl.getProduct);
router.post("/", ctrl.createProduct);
router.put("/:id", ctrl.updateProduct);
router.delete("/:id", ctrl.deleteProduct);

export default router;
