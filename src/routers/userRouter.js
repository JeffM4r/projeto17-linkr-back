import express from "express";
import { getUserInfo } from "../controllers/usersController.js";
import { tokenVerification } from "../middlewares/tokenValidationMiddleware.js";

const router = express.Router();

router.get("/user/:id", tokenVerification, getUserInfo);

export default router;
