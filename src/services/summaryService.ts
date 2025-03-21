import { findClientByDocument } from "../repositories/clientRepository";
import { findPhonesByClient } from "../repositories/phoneRepository";
import { findCarrierById } from "../repositories/carrierRepository";
import { findRechargesByNumber } from "../repositories/rechargeRepository";

export async function getSummaryService(document: string) {
  const client = await findClientByDocument(document);
  if (!client) throw new Error("Cliente não encontrado.");

  const phones = await findPhonesByClient(client.id);

  const phonesWithDetails = await Promise.all(
    phones.map(async (phone) => {
      const carrier = await findCarrierById(phone.carrier_id);
      const recharges = await findRechargesByNumber(phone.number);

      return {
        ...phone,
        carrier,
        recharges,
      };
    })
  );

  return {
    document,
    phones: phonesWithDetails,
  };
}
