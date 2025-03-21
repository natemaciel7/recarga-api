import { Recharge } from "../protocols";
import { findPhoneByNumber } from "../repositories/phoneRepository";
import {
  createRecharge,
  findRechargesByNumber,
} from "../repositories/rechargeRepository";

export async function rechargePhoneService(
  number: string,
  amount: number
): Promise<Recharge> {
  if (amount < 10 || amount > 1000)
    throw new Error("Valor inválido para recarga.");

  const phone = await findPhoneByNumber(number);
  if (!phone) throw new Error("Telefone não encontrado.");

  return await createRecharge(phone.id, amount);
}

export async function getRechargesByNumberService(
  number: string
): Promise<Recharge[]> {
  return await findRechargesByNumber(number);
}
