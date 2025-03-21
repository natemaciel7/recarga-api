import { Router } from "express";
import { registerClient } from "../controllers/clientController";
import { validateSchema } from "../middlewares/validationMiddleware";
import Joi from "joi";

const clientSchema = Joi.object({
  document: Joi.string()
    .length(11)
    .pattern(/^[0-9]+$/)
    .required(),
  name: Joi.string().min(3).required(),
});

const router = Router();

router.post("/clients", validateSchema(clientSchema), registerClient);

export default router;
