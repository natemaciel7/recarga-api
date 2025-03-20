import { Router } from "express";
import {
  registerPhone,
  getPhonesByClient,
} from "../controllers/phoneController";
import { validateSchema } from "../middlewares/validationMiddleware";
import { phoneSchema } from "../schemas/phoneSchema";

const router = Router();

router.post("/phones", validateSchema(phoneSchema), registerPhone);
router.get("/phones/:document", getPhonesByClient);

export default router;
