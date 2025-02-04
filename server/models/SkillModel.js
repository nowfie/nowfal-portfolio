const mongoose = require('mongoose')
const dbConnect = require('../lib/dbConnect')

dbConnect()
const SkillSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Please provide a project category'],
        enum: ['language', 'frontend', 'backend', 'database', 'aiml', 'others'],
    },
    name: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    iconFamily: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    iconName: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    }
})

const SkillModel = mongoose.model('Skill', SkillSchema)
module.exports = SkillModel