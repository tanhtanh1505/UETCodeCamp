import { Router } from "express";
import { getAllNotes, getNote, createNote, updateNote, deleteNote, searchNote } from "../controllers/note";
import catchAsync from "../exceptions/catch-async";
import { validateCreateNote, validateUpdateNote } from "../middlewares/validate/note";
import { isAuthor, verifyToken } from "../middlewares/verify-token";

const noteRoute = Router();

noteRoute.use(verifyToken);

noteRoute.get("/", catchAsync(getAllNotes));
noteRoute.get("/search", catchAsync(searchNote));
noteRoute.get("/:id", isAuthor, catchAsync(getNote));

noteRoute.post("/", validateCreateNote, catchAsync(createNote));

noteRoute.put("/:id", validateUpdateNote, isAuthor, catchAsync(updateNote));

noteRoute.delete("/:id", isAuthor, catchAsync(deleteNote));

export default noteRoute;
