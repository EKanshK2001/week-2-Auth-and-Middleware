import express from 'express'
import { profile } from '../controllers/userController';
import { userAuth } from '../middlewares/userAuth';

const router = express.Router();

router.get('/profile', userAuth, profile);

export default router;