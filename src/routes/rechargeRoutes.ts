import { Router } from "express";
import {
  rechargePhone,
  getRechargesByNumber,
} from "../controllers/rechargeController";
import { validateSchema } from "../middlewares/validationMiddleware";
import { rechargeSchema } from "../schemas/rechargeSchema";

const router = Router();

router.post("/recharges", validateSchema(rechargeSchema), rechargePhone);
router.get("/recharges/:number", getRechargesByNumber);

export default router;
