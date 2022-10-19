import express from "express";
import { timeline } from "../controllers/timelineController.js";

const router = express.Router();

router.get("/posts", timeline);

export default router;
