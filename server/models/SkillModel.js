import mongoose from 'mongoose'

const SkillSchema = mongoose.Schema({
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

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema)