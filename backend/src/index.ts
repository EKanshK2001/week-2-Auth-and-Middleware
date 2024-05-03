import express from 'express'
import userRouter from './routes/userRoute'
import authRouter from './routes/userAuthRoute'
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
    console.log('app is running on port:3000');
})