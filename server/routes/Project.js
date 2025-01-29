import express, { Router } from 'express'
import dbConnect from '../lib/dbConnect.js'
import ProjectModel from '../models/ProjectModel.js'

const router = Router()

router.post('/', async(req, res) => {
    try {
        await dbConnect()
        const {
            title,
            description,
            category,
            details,
            statement,
            technologyStack: { paragraph, stack: { languages, frontend, backend, database, others } },
            conclusion
        } = await req.body

        if (!title || !category || !description || !details || !statement || !paragraph || !languages || !frontend || !backend || !database || !others || !conclusion) {
            return res.status(400).json({ message: 'Please provide all required fields' })
        }

        const newProject = new ProjectModel({
            title,
            description,
            category,
            details,
            statement,
            technologyStack: { paragraph, stack: { languages, frontend, backend, database, others } },
            conclusion
        });

        await newProject.save()
        res.status(201).json({ message: 'Successfully created', data: newProject })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

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