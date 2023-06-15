import express from "express";
import noteRoute from "./api/routes/NoteRoute";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to express" });
});

app.use("/notes", noteRoute);

app.use("*", (req, res) => {
  return res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
