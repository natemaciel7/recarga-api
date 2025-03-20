import pool from "../config/database";
import { Client } from "../protocols";

export async function createClient(document: string): Promise<Client> {
  const result = await pool.query(
    "INSERT INTO clients (document) VALUES ($1) RETURNING *",
    [document]
  );
  return result.rows[0];
}

export async function findClientByDocument(
  document: string
): Promise<Client | null> {
  const result = await pool.query("SELECT * FROM clients WHERE document = $1", [
    document,
  ]);
  return result.rows[0] || null;
}
