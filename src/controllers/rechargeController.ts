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
    const { number, amount } = req.body;
    const recharge = await rechargePhoneService(number, amount);
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
    const number = req.params.number;
    const recharges = await getRechargesByNumberService(number);
    res.status(200).json(recharges);
  } catch (error) {
    next(error);
  }
}
