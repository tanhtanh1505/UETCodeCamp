import { createNoteSchema, updateNoteSchema } from "../schemas";

export const validateCreateNote = (req, res, next) => {
  const { error } = createNoteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export const validateUpdateNote = (req, res, next) => {
  const { error } = updateNoteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};
