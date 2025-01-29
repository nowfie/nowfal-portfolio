import express, { Router } from 'express'
import dbConnect from '../lib/dbConnect.js'
import EducationModel from '../models/EducationModel.js'

const router = Router()

router.post('/', async(req, res) => {
    try {
        await dbConnect()
        const { duration, institution, degree } = await req.body

        if (!duration || !institution || !degree) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, image, date)' })
        }

        const newEducation = new EducationModel({
            duration,
            institution,
            degree
        });

        await newEducation.save()
        res.status(201).json({ message: 'Successfully created', data: newEducation })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async(req, res) => {
    try {
        await dbConnect()

        const education = await EducationModel.find()
        if (!education.length > 0) {
            return res.status(404).json({ message: 'education are not available' })
        }
        res.status(200).json({ message: 'Hello world', data: education })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req, res) => {
    try {
        await dbConnect()
        const education = await EducationModel.findById(req.params.id);
        if (!education) {
            return res.status(404).json({ message: 'education are not available' })
        }
        res.status(200).json({ message: 'Hello world', data: education })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        await dbConnect()
        const deleteEducation = await EducationModel.findByIdAndDelete(req.params.id)
        if (!deleteEducation) {
            return res.status(404).json({ message: 'education are not available' })
        }
        res.status(200).json({ message: 'update successfull', data: deleteEducation })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const body = await req.body
        await dbConnect()
        const updateEducation = await EducationModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateEducation) {
            return res.status(404).json({ message: 'education are not available' })
        }
        res.status(200).json({ message: 'update successfull', data: updateEducation })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router