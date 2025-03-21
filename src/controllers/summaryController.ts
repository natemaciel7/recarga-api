import { Request, Response, NextFunction } from "express";
import { getSummaryService } from "../services/summaryService";

export async function getSummary(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { document } = req.params;
    const summary = await getSummaryService(document);
    res.status(200).json(summary);
  } catch (error) {
    next(error);
  }
}
