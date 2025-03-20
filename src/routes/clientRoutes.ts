import { Router } from "express";
import { registerClient } from "../controllers/clientController";
import { validateSchema } from "../middlewares/validationMiddleware";
import { clientSchema } from "../schemas/clientSchema";

const router = Router();

router.post("/clients", validateSchema(clientSchema), registerClient);

export default router;
