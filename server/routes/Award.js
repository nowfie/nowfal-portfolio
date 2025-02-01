import express, { Router } from 'express'
import dbConnect from '../lib/dbConnect.js'
import AwardModel from '../models/AwardModel.js'
import multer from 'multer'
const router = Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/award');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async(req, res) => {
    try {
        await dbConnect()
        const image = req.file.path
        const { name, description, location, date } = await req.body

        if (!name || !description || !location || !date || !image) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, image, date)' })
        }

        const newAward = new AwardModel({
            name,
            description,
            location,
            date,
            image
        });

        await newAward.save()
        res.status(201).json({ message: 'Successfully created', data: newAward })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async(req, res) => {
    try {
        await dbConnect()

        const Award = await AwardModel.find()
        if (!Award.length > 0) {
            return res.status(404).json({ message: 'Award are not available' })
        }
        res.status(200).json({ message: 'award fetched succesfully', data: Award })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req, res) => {
    try {
        await dbConnect()
        const Award = await AwardModel.findById(req.params.id);
        if (!Award) {
            return res.status(404).json({ message: 'Award are not available' })
        }
        res.status(200).json({ message: `${req.params.id} fetched succesfully`, data: Award })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        await dbConnect()
        const deleteAward = await AwardModel.findByIdAndDelete(req.params.id)
        if (!deleteAward) {
            return res.status(404).json({ message: 'Award are not available' })
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteAward })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const body = await req.body
        await dbConnect()
        const updateAward = await AwardModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateAward) {
            return res.status(404).json({ message: 'Award are not available' })
        }
        res.status(200).json({ message: 'updated successfull', data: updateAward })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router