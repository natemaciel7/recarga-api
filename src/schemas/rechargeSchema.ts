import Joi from "joi";

export const rechargeSchema = Joi.object({
  number: Joi.string()
    .pattern(/^[0-9]{10,11}$/)
    .required(),
  amount: Joi.number().min(10).max(1000).required(),
});
