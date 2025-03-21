import { Client } from "../protocols";
import {
  createClient,
  findClientByDocument,
} from "../repositories/clientRepository";

export async function registerClientService(
  document: string,
  name: string
): Promise<Client> {
  const existingClient = await findClientByDocument(document);
  if (existingClient) {
    throw new Error("Cliente já cadastrado.");
  }
  return await createClient(document, name);
}
