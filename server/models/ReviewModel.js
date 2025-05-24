const mongoose = require('mongoose')
const dbConnect = require('../lib/dbConnect')

dbConnect()
const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    location: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    role: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    message: {
        type: String,
        required: [true, 'Please provide a project description'],
    },
    image: {
        type: String,
        // required: [true, 'please provide a title'],
    }
})

const ReviewModel = mongoose.model('Review', ReviewSchema)
module.exports = ReviewModel