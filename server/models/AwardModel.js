import mongoose from 'mongoose'

const AwardSchema = mongoose.Schema({
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
        required: [true, 'please provide a title'],
    }

})

export default mongoose.models.Award || mongoose.model('Award', AwardSchema)