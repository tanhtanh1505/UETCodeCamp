import Joi from "joi";

export const createNoteSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("").default(""),
  status: Joi.boolean().allow(null).default(false),
});

export const updateNoteSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string().allow(""),
  status: Joi.boolean(),
});
