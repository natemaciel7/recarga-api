import { Request, Response, NextFunction } from "express";
import { getSummaryService } from "../services/summaryService";

export async function getSummary(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const summary = await getSummaryService(req.params.document);
    res.json(summary);
  } catch (error) {
    next(error);
  }
}
