import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });
const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('Connection established')
    }).catch((error) => {
        console.log(error)
    })
}

export default dbConnect