import { Request, Response, NextFunction } from "express";
import {
  rechargePhoneService,
  getRechargesByNumberService,
} from "../services/rechargeService";

export async function rechargePhone(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const recharge = await rechargePhoneService(
      req.body.number,
      req.body.amount
    );
    res.status(201).json(recharge);
  } catch (error) {
    next(error);
  }
}

export async function getRechargesByNumber(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const recharges = await getRechargesByNumberService(req.params.number);
    res.json(recharges);
  } catch (error) {
    next(error);
  }
}
