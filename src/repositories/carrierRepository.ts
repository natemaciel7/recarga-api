import pool from "../config/database";
import { Carrier } from "../protocols";

export async function findCarrierById(id: number): Promise<Carrier | null> {
  const result = await pool.query("SELECT * FROM carriers WHERE id = $1", [id]);
  return result.rows[0] || null;
}
