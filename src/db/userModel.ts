import mongoose, { Schema } from 'mongoose'
import 'dotenv/config'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string).then(() => {
            console.log('database connected');
        })
    } catch (error) {
        console.log(error);
    }
}

connectDB();



const userSchema: Schema = new mongoose.Schema<userInterface> ({
    username: { type: String, required: true}, 
    email: { type: String, required: true},
    password: { type: String, required: true},
    pages: { type: [String] }
})

export const UserModel = mongoose.model<userInterface>('User', userSchema);

// export default UserModel 

