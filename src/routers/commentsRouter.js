import express from 'express';
import { getComments } from '../controllers/getCommentsController.js';
import { tokenVerification } from '../middlewares/tokenValidationMiddleware.js';

const router = express.Router()

router.get('/comments/:postId', tokenVerification, getComments)

export default router;