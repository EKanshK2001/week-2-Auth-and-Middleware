import express from 'express'
import { profile, signin, signup } from '../controllers/userController';
import { userAuth } from '../middlewares/userAuth';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', userAuth, profile);

export default router;