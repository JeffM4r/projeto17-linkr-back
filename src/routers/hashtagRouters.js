import express from 'express';
import { getHashtagsList,getSpecificHashtag } from '../controllers/hashtagControllers.js';

const router = express.Router()

router.get('/hashtags', getHashtagsList)
router.get('/hashtags/:hashtag', getSpecificHashtag )

export default router;