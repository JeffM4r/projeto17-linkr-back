import express from 'express';
import { getHashtagsList } from '../controllers/hashtagControllers.js';

const router = express.Router()

router.get('/hashtags', getHashtagsList)

export default router;