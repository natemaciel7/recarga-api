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
    const phone = await registerPhoneService(
      req.body.number,
      req.body.carrier_id,
      req.body.document,
      req.body.description
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
    const phones = await getPhonesByClientService(req.params.document);
    res.json(phones);
  } catch (error) {
    next(error);
  }
}
