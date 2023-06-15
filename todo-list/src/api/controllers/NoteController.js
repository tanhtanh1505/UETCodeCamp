import { v4 as uuidv4 } from "uuid";

let notes = [
  {
    id: 1,
    title: "Note 1",
    description: "Description 1",
    status: false,
  },
  {
    id: 2,
    title: "Note 2",
    description: "Description 2",
    status: true,
  },
];

// req: request : url, params, body, header
export const getNote = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const note = notes.find((note) => note.id == id);

  if (!note) {
    return res.redirect("/notes");
  }

  return res.status(200).json({ note });
};

export const getAllNotes = (req, res) => {
  return res.status(200).json({ notes });
};

export const createNote = (req, res) => {
  const { title, description, status } = req.body;
  const newNote = {
    id: uuidv4(),
    title,
    description,
    status,
  };

  notes.push(newNote);

  return res.status(200).json({ notes });
};

export const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  console.log(req.params);
  console.log(req.body);

  const note = notes.find((note) => note.id == id);

  if (title) note.title = title;
  if (description) note.description = description;
  if (status) note.status = status;

  return res.status(200).json({ note });
};

export const deleteNote = (req, res) => {
  const { id } = req.params;

  notes = notes.filter((note) => note.id != id);

  return res.status(200).json({ notes });
};

export const searchNote = (req, res) => {
  const { title } = req.query;
  console.log(req.query);

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase()));

  return res.status(200).json({ notes: filteredNotes });
};
