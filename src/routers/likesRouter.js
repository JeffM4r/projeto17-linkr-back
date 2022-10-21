import express from "express";
import { dislike, like } from "../controllers/likesController.js";
import { tokenVerification } from "../middlewares/tokenValidationMiddleware.js";

const router = express.Router();
router.post("/likes/:postId", tokenVerification, like);
router.delete("/likes/:postId", tokenVerification, dislike);

export default router;
