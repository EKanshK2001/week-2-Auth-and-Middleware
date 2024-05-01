import express from 'express'
import { profile, signin } from '../controllers/userController';
import { userAuth } from '../middlewares/userAuth';

const router = express.Router();

router.post('/signin', signin);
router.get('/profile', userAuth, profile);

export default router;