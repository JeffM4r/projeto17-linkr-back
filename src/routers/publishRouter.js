import express from "express";
import { postPublish, postDeletePublish } from "../controllers/publishController.js";
import { publishMiddleware } from "../middlewares/schemasMiddleware.js";
import { tokenVerification } from "../middlewares/tokenValidationMiddleware.js"
import { deletePublishMiddleware } from "../middlewares/publishMiddleware.js";

const router = express.Router()
router.post("/post", publishMiddleware, tokenVerification, postPublish)
router.delete("/post/:id", deletePublishMiddleware, tokenVerification, postDeletePublish)

export default router