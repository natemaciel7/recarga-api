import Joi from "joi";

export const clientSchema = Joi.object({
  document: Joi.string()
    .length(11)
    .pattern(/^[0-9]+$/)
    .required(),
  name: Joi.string().min(3).required(),
});
