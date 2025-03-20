import pool from "../config/database";
import { Phone } from "../protocols";

export async function createPhone(
  number: string,
  carrier_id: number,
  client_id: number,
  description: string
): Promise<Phone> {
  const result = await pool.query(
    "INSERT INTO phones (number, carrier_id, client_id, description) VALUES ($1, $2, $3, $4) RETURNING *",
    [number, carrier_id, client_id, description]
  );
  return result.rows[0];
}

export async function findPhonesByClient(client_id: number): Promise<Phone[]> {
  const result = await pool.query("SELECT * FROM phones WHERE client_id = $1", [
    client_id,
  ]);
  return result.rows;
}

export async function findPhoneByNumber(number: string): Promise<Phone | null> {
  const result = await pool.query("SELECT * FROM phones WHERE number = $1", [
    number,
  ]);
  return result.rows[0] || null;
}
