const mongoose = require('mongoose')
const dbConnect = require('../lib/dbConnect')

dbConnect()
const AwardSchema = new mongoose.Schema({
    location: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    date: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    name: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'please provide a title'],
    },
    image: {
        type: String,
    }

})
const AwardModel = mongoose.model('Award', AwardSchema)

module.exports = AwardModel