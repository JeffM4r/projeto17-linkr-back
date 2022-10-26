import express from 'express';
import { sharePost } from '../controllers/shareController.js';
import { tokenVerification } from '../middlewares/tokenValidationMiddleware.js'

const router = express.Router()

router.post('/share/:postId', tokenVerification, sharePost);

export default router;