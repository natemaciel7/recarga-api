import { Request, Response, NextFunction } from "express";
import {
  registerPhoneService,
  getPhonesByClientService,
} from "../services/phoneService";

export async function registerPhone(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { number, carrier_id, document, description } = req.body;
    const phone = await registerPhoneService(
      number,
      carrier_id,
      document,
      description
    );
    res.status(201).json(phone);
  } catch (error) {
    next(error);
  }
}

export async function getPhonesByClient(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { document } = req.params;
    const phones = await getPhonesByClientService(document);
    res.status(200).json(phones);
  } catch (error) {
    next(error);
  }
}
