const mongoose = require('mongoose');
const dbConnect = require('../lib/dbConnect');

dbConnect()
const ProjectSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Please provide a project category'],
        enum: ['website', 'mobile app', 'desktop software'],
    },
    title: {
        type: String,
        required: [true, 'Please provide a project title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a project description'],
    },
    client: {
        type: String,
        required: [true, 'Please provide a client']
    },
    executors: {
        type: [String],
        required: [true, 'Please provide a client']
    },
    link: {
        type: String,
        required: [true, 'Please provide a project description'],
    },
    details: {
        type: [String],
        required: [true, 'Please provide project details'],
    },
    dateFrom: {
        type: String,
        required: [true, 'Please provide a project statement'],
    },
    dateTo: {
        type: String,
        required: [true, 'Please provide a project statement'],
    },
    statement: {
        type: String,
        required: [true, 'Please provide a project statement'],
    },
    technologyStack: {
        paragraph: {
            type: String,
            required: [true, 'Please provide a paragraph for the technology stack'],
        },
        stack: {
            languages: {
                type: [String],
                required: [true, 'Please provide languages for the technology stack'],
            },
            frontend: {
                type: [String],
                required: [true, 'Please provide frontend technologies for the technology stack'],
            },
            backend: {
                type: [String],
                required: [true, 'Please provide backend technologies for the technology stack'],
            },
            database: {
                type: [String],
                required: [true, 'Please provide databases for the technology stack'],
            },
            others: {
                type: [String],
                required: [true, 'Please provide other technologies for the technology stack'],
            },
        },
    },
    conclusion: {
        type: String,
        required: [true, 'Please provide a project conclusion'],
    },
    image: {
        type: String,
        // required: [true, 'please provide a title'],
    },
    demoImages: {
        type: [String],
        // required: [true, 'please provide a title'],
    },
    freelance: {
        type: Boolean,
        required: [true, 'Please specify if the project is freelance or not'],
    }

}, { timestamps: true });

const ProjectModel = mongoose.model('Project', ProjectSchema);
module.exports = ProjectModel