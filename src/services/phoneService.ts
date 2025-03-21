import { Phone } from "../protocols";
import { findClientByDocument } from "../repositories/clientRepository";
import {
  createPhone,
  findPhoneByNumber,
  findPhonesByClient,
} from "../repositories/phoneRepository";

export async function registerPhoneService(
  number: string,
  carrier_id: number,
  document: string,
  description: string
): Promise<Phone> {
  const client = await findClientByDocument(document);
  if (!client) throw new Error("Cliente não encontrado.");

  const existingPhones = await findPhonesByClient(client.id);
  if (existingPhones.length >= 3)
    throw new Error("Limite de 3 telefones atingido.");

  const phoneExists = await findPhoneByNumber(number);
  if (phoneExists) throw new Error("Telefone já cadastrado.");

  return await createPhone(number, carrier_id, client.id, description);
}

export async function getPhonesByClientService(
  document: string
): Promise<Phone[]> {
  const client = await findClientByDocument(document);
  if (!client) throw new Error("Cliente não encontrado.");
  return await findPhonesByClient(client.id);
}
