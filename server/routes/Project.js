import express, { Router } from 'express'
import dbConnect from '../lib/dbConnect.js'
import ProjectModel from '../models/ProjectModel.js'
import multer from 'multer';

const router = Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/project');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

function safeParse(jsonString) {
    try {
        return typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
    } catch (e) {
        return null; // Return null if parsing fails
    }
}

router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'demoImages', maxCount: 5 }]), async(req, res) => {
    try {
        await dbConnect();

        const image = req.files['image'] ? req.files['image'][0].path : null;
        const demoImages = req.files['demoImages'] ? req.files['demoImages'].map(file => file.path) : [];

        const {
            title,
            description,
            client,
            link,
            dateFrom,
            dateTo,
            executors,
            category,
            details,
            statement,
            technologyStack: { paragraph, stack: { languages, frontend, backend, database, others } },
            conclusion
        } = req.body;

        if (!title || !category || !image || !demoImages.length || !client || !executors || !link || !dateFrom || !dateTo || !description || !details || !statement || !paragraph || !languages || !frontend || !backend || !database || !others || !conclusion) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const parsedExecutors = safeParse(executors);
        const parsedDetails = safeParse(details);
        const parsedLanguages = safeParse(languages);
        const parsedFrontend = safeParse(frontend);
        const parsedBackend = safeParse(backend);
        const parsedDatabase = safeParse(database);
        const parsedOthers = safeParse(others);

        const newProject = new ProjectModel({
            title,
            description,
            client,
            link,
            executors: parsedExecutors || executors,
            dateFrom,
            image,
            demoImages,
            dateTo,
            category,
            details: parsedDetails || details,
            statement,
            technologyStack: {
                paragraph,
                stack: {
                    languages: parsedLanguages || languages,
                    frontend: parsedFrontend || frontend,
                    backend: parsedBackend || backend,
                    database: parsedDatabase || database,
                    others: parsedOthers || others
                }
            },
            conclusion
        });

        await newProject.save();
        res.status(201).json({ message: 'Successfully created', data: newProject });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/', async(req, res) => {
    try {
        await dbConnect()

        const projects = await ProjectModel.find()
        if (!projects.length > 0) {
            return res.status(404).json({ message: 'projects are not available' })
        }
        res.status(200).json({ message: 'Hello world', data: projects })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:name', async(req, res) => {
    try {
        await dbConnect()
        const project = await ProjectModel.findOne({ title: req.params.name });
        if (!project) {
            return res.status(404).json({ message: 'projects are not available' })
        }
        res.status(200).json({ message: 'Hello world', data: project })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        await dbConnect()
        const deleteProject = await ProjectModel.findByIdAndDelete(req.params.id)
        if (!deleteProject) {
            return res.status(404).json({ message: 'project is not available' })
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteProject })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const body = await req.body
        await dbConnect()
        const updateProject = await ProjectModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateProject) {
            return res.status(404).json({ message: 'project is not available' })
        }
        res.status(200).json({ message: 'update successfull', data: updateProject })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router