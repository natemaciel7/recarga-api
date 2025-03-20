import { Request, Response, NextFunction } from "express";
import { registerClientService } from "../services/clientService";

export async function registerClient(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const client = await registerClientService(req.body.document);
    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
}
