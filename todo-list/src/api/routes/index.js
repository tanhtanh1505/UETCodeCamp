import { Router } from "express";

import authRoute from "./auth";
import noteRoute from "./note";
import userRoute from "./user";

const router = Router();

router.use("/auth", authRoute);
router.use("/notes", noteRoute);
router.use("/users", userRoute);

export default router;
