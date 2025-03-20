import Joi from "joi";

export const rechargeSchema = Joi.object({
  number: Joi.string().length(11).pattern(/^\d+$/).required(),
  amount: Joi.number().min(10).max(1000).required(),
});
