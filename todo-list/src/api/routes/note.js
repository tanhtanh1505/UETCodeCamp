import { Router } from "express";
import { getAllNotes, getNote, createNote, updateNote, deleteNote, searchNote } from "../controllers/note";
import catchAsync from "../exceptions/catch-async";
import { validateCreateNote, validateUpdateNote } from "../middlewares/validate/note";

const noteRoute = Router();

// CRUD Create - Read - Update - Delete
//GET: Lay du lieu, query params
noteRoute.get("/", catchAsync(getAllNotes));
noteRoute.get("/search", catchAsync(searchNote));
noteRoute.get("/:id", catchAsync(getNote));

//POST: Them du lieu, body params
noteRoute.post("/", validateCreateNote, catchAsync(createNote));

//PUT: Sua du lieu, body params
noteRoute.put("/:id", validateUpdateNote, catchAsync(updateNote));

//DELETE: Xoa du lieu, query params
noteRoute.delete("/:id", catchAsync(deleteNote));

export default noteRoute;
