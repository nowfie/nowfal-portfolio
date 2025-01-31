import express, { Router } from 'express'
import dbConnect from '../lib/dbConnect.js'
import SkillModel from '../models/SkillModel.js'

const router = Router()

router.post('/', async(req, res) => {
    try {
        await dbConnect()
        const { name, iconFamily, iconName, category } = await req.body

        if (!name || !iconFamily || !iconName || !category) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, image, date)' })
        }

        const newSkill = new SkillModel({
            name,
            iconFamily,
            iconName,
            category
        });

        await newSkill.save()
        res.status(201).json({ message: 'Successfully created', data: newSkill })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async(req, res) => {
    try {
        await dbConnect()

        const Skill = await SkillModel.find()
        if (!Skill.length > 0) {
            return res.status(404).json({ message: 'Skill are not available' })
        }
        res.status(200).json({ message: 'Hello world', data: Skill })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req, res) => {
    try {
        await dbConnect()
        const Skill = await SkillModel.findById(req.params.id);
        if (!Skill) {
            return res.status(404).json({ message: 'Skill are not available' })
        }
        res.status(200).json({ message: 'Hello world', data: Skill })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        await dbConnect()
        const deleteSkill = await SkillModel.findByIdAndDelete(req.params.id)
        if (!deleteSkill) {
            return res.status(404).json({ message: 'Skill are not available' })
        }
        res.status(200).json({ message: 'update successfull', data: deleteSkill })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const body = await req.body
        await dbConnect()
        const updateSkill = await SkillModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateSkill) {
            return res.status(404).json({ message: 'Skill are not available' })
        }
        res.status(200).json({ message: 'update successfull', data: updateSkill })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router