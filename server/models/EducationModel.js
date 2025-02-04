const mongoose = require('mongoose')
const dbConnect = require('../lib/dbConnect')

dbConnect()
const EducationSchema = new mongoose.Schema({
    duration: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    institution: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    degree: {
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

const EducationModel = mongoose.model('Education', EducationSchema)
module.exports = EducationModel