import express from 'express'
import userRouter from './routes/userRoute'

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('app is running on port:3000');
})