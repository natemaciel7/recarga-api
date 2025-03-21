import pool from "../config/database";
import { Client } from "../protocols";

export async function createClient(
  document: string,
  name: string
): Promise<Client> {
  const result = await pool.query<Client>(
    "INSERT INTO clients (document, name) VALUES ($1, $2) RETURNING *",
    [document, name]
  );
  return result.rows[0];
}

export async function findClientByDocument(
  document: string
): Promise<Client | null> {
  const result = await pool.query<Client>(
    "SELECT * FROM clients WHERE document = $1",
    [document]
  );
  return result.rows[0] || null;
}
