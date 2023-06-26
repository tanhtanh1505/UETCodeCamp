import HttpException from "../exceptions/http-exception";
import Note from "../models/note";

// req: request : url, params, body, header
export const getNote = async (req, res) => {
  const { id } = req.params;

  if (id.length !== 24) throw new HttpException(400, "Invalid id");

  const note = await Note.findById(id);

  if (!note) {
    throw new HttpException(404, "Note not found");
  }

  return res.status(200).json({ note });
};

export const getAllNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user });
  return res.status(200).json({ notes });
};

export const createNote = async (req, res) => {
  const { title, description, status } = req.body;

  const newNote = await Note.create({
    user: req.user,
    title,
    description,
    status,
  });

  return res.status(200).json({ newNote });
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const noteUpdated = await Note.findByIdAndUpdate(
    id,
    {
      title,
      description,
      status,
    },
    { new: true }
  );

  return res.status(200).json({ noteUpdated });
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (id.length !== 24) throw new HttpException(400, "Invalid id");

  await Note.findByIdAndDelete(id);

  const notes = await Note.find();

  return res.status(200).json({ notes });
};

export const searchNote = async (req, res) => {
  const { title } = req.query;

  if (!title) throw new HttpException(400, "Title is required");

  const notes = await Note.find({ title: { $regex: title, $options: "i" }, user: req.user });

  return res.status(200).json({ notes });
};
