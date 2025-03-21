import { Router } from "express";
import { getSummary } from "../controllers/summaryController";

const router = Router();

router.get("/summary/:document", getSummary);

export default router;
