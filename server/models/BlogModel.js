import mongoose from 'mongoose'

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for the blog post'],
    },
    content: {
        type: [String],
        required: [true, 'Please provide a content for the blog post'],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message for the blog post'],
    },
    conclusion: {
        type: String,
        required: [true, 'Please provide a description for the blog post'],
    },
    image: {
        type: String,
        required: [true, 'Please provide an image URL for the blog post'],
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)