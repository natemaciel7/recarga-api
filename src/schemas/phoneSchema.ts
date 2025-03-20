import Joi from "joi";

export const phoneSchema = Joi.object({
  number: Joi.string().length(11).pattern(/^\d+$/).required(),
  carrier_id: Joi.number().integer().required(),
  document: Joi.string().length(11).pattern(/^\d+$/).required(),
  description: Joi.string().min(3).max(255).required(),
});
