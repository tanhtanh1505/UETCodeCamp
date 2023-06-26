import { Router } from "express";
import { login, requestRefreshToken } from "../controllers/auth";
import catchAsync from "../exceptions/catch-async";

const authRoute = Router();

authRoute.post("/login", catchAsync(login));
authRoute.post("/refresh-token", catchAsync(requestRefreshToken));

export default authRoute;
