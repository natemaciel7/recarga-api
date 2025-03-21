import { Request, Response, NextFunction } from "express";
import { registerClientService } from "../services/clientService";

export async function registerClient(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { document, name } = req.body;
    const client = await registerClientService(document, name);
    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
}
