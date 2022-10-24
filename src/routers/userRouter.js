import express from "express";
import { getUserInfo, searchUsers } from "../controllers/usersController.js";
import { tokenVerification } from "../middlewares/tokenValidationMiddleware.js";
import { searchUsersMiddleware } from '../middlewares/usersMiddleware.js';

const router = express.Router();

router.get("/user/:id", tokenVerification, getUserInfo);
router.get('/search/:username',searchUsersMiddleware, searchUsers)

export default router;
