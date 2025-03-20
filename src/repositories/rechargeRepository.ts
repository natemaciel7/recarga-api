import pool from "../config/database";
import { Recharge } from "../protocols";

export async function createRecharge(
  phone_id: number,
  amount: number
): Promise<Recharge> {
  try {
    const result = await pool.query(
      "INSERT INTO recharges (phone_id, amount) VALUES ($1, $2) RETURNING *",
      [phone_id, amount]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Erro ao criar recarga:", error);
    throw new Error("Erro interno ao criar recarga.");
  }
}

export async function findRechargesByNumber(
  number: string
): Promise<Recharge[]> {
  try {
    const result = await pool.query(
      `SELECT r.id, r.phone_id, r.amount, r.created_at
       FROM recharges r
       JOIN phones p ON r.phone_id = p.id
       WHERE p.number = $1`,
      [number]
    );

    return result.rows;
  } catch (error) {
    console.error("Erro ao buscar recargas pelo número:", error);
    throw new Error("Erro interno ao buscar recargas.");
  }
}
