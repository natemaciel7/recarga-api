import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export function validateSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      res.status(422).json({
        message: "Erro de validação",
        errors: error.details.map((detail) => detail.message),
      });
      return;
    }

    next();
  };
}
