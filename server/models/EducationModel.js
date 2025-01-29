import mongoose from 'mongoose'

const EducationSchema = mongoose.Schema({
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
    }
})

export default mongoose.models.Education || mongoose.model('Education', EducationSchema)