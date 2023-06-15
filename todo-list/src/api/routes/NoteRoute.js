import { Router } from "express";
import { getAllNotes, getNote, createNote, updateNote, deleteNote, searchNote } from "../controllers/NoteController";

const noteRoute = Router();

// CRUD Create - Read - Update - Delete
//GET: Lay du lieu, query params
noteRoute.get("/", getAllNotes);
noteRoute.get("/search", searchNote);
noteRoute.get("/:id", getNote);

//POST: Them du lieu, body params
noteRoute.post("/", createNote);

//PUT: Sua du lieu, body params
noteRoute.put("/:id", updateNote);

//DELETE: Xoa du lieu, query params
noteRoute.delete("/:id", deleteNote);

noteRoute;

export default noteRoute;
