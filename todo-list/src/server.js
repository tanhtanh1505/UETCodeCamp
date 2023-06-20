import express from "express";
import noteRoute from "./api/routes/note";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect to mongoose is successful!");
  } catch (error) {
    console.log("Caught! Cannot connect to mongodb: ", error);
  }
})();

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to express" });
});

app.use("/notes", noteRoute);

app.use((err, req, res, next) => {
  const { status = 404, message = "Error" } = err;
  res.status(status).json({ message });
});

app.use("*", (req, res) => {
  return res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
