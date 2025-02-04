const mongoose = require('mongoose')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('Connection established')
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = dbConnect