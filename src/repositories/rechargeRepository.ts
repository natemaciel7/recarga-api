import pool from "../config/database";
import { Recharge } from "../protocols";

export async function createRecharge(
  phone_id: number,
  amount: number
): Promise<Recharge> {
  const result = await pool.query<Recharge>(
    "INSERT INTO recharges (phone_id, amount) VALUES ($1, $2) RETURNING *",
    [phone_id, amount]
  );
  return result.rows[0];
}

export async function findRechargesByNumber(
  number: string
): Promise<Recharge[]> {
  const result = await pool.query<Recharge>(
    `SELECT r.* FROM recharges r
     JOIN phones p ON r.phone_id = p.id
     WHERE p.number = $1`,
    [number]
  );
  return result.rows;
}
