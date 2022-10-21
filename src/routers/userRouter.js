import express from 'express'
import { getUserInfo } from '../controllers/usersController.js'

const router = express.Router()

router.get('/user/:id', getUserInfo)

export default router;