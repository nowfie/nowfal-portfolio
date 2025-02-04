const mongoose = require('mongoose')
const dbConnect = require('../lib/dbConnect')

dbConnect()
const ExperienceSchema = new mongoose.Schema({
    duration: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    company: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    role: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a project description'],
    },
    image: {
        type: String,
        required: [true, 'please provide a title'],
    }
})
const ExperienceModel = mongoose.model('Experience', ExperienceSchema)
module.exports = ExperienceModel