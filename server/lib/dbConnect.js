import mongoose from "mongoose";

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/nowfal-portfolio').then(() => {
        console.log('Connection established')
    }).catch((error) => {
        console.log(error)
    })
}

export default dbConnect