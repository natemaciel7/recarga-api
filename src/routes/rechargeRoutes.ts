import { Router } from "express";
import {
  rechargePhone,
  getRechargesByNumber,
} from "../controllers/rechargeController";
import { validateSchema } from "../middlewares/validationMiddleware";
import Joi from "joi";

const rechargeSchema = Joi.object({
  number: Joi.string()
    .pattern(/^[0-9]{10,11}$/)
    .required(),
  amount: Joi.number().min(10).max(1000).required(),
});

const router = Router();

router.post("/recharges", validateSchema(rechargeSchema), rechargePhone);
router.get("/recharges/:number", getRechargesByNumber);

export default router;
