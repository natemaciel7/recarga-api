import { Client } from "../protocols";
import {
  createClient,
  findClientByDocument,
} from "../repositories/clientRepository";

export async function registerClientService(document: string): Promise<Client> {
  if (document.length !== 11 || !/^\d+$/.test(document)) {
    throw new Error("O CPF deve ter exatamente 11 dígitos numéricos.");
  }

  const existingClient = await findClientByDocument(document);
  if (existingClient) {
    throw new Error("CPF já cadastrado.");
  }

  return await createClient(document);
}
