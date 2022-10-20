import express from "express";
import { postPublish, postDelete } from "../controllers/postsController.js";

const router = express.Router()
router.post("/post", postPublish)
router.delete("/post/:id", postDelete)

export default router