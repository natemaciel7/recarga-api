import Joi from "joi";

export const clientSchema = Joi.object({
  document: Joi.string().length(11).pattern(/^\d+$/).required(),
});
