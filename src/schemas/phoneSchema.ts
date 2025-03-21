import Joi from "joi";

export const phoneSchema = Joi.object({
  number: Joi.string()
    .pattern(/^[0-9]{10,11}$/)
    .required(),
  carrier_id: Joi.number().required(),
  document: Joi.string().length(11).required(),
  description: Joi.string().min(3).required(),
});
