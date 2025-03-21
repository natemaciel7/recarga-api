import { Router } from "express";
import {
  registerPhone,
  getPhonesByClient,
} from "../controllers/phoneController";
import { validateSchema } from "../middlewares/validationMiddleware";
import Joi from "joi";

const phoneSchema = Joi.object({
  number: Joi.string()
    .pattern(/^[0-9]{10,11}$/)
    .required(),
  carrier_id: Joi.number().required(),
  document: Joi.string().length(11).required(),
  description: Joi.string().min(3).required(),
});

const router = Router();

router.post("/phones", validateSchema(phoneSchema), registerPhone);
router.get("/phones/:document", getPhonesByClient);

export default router;
