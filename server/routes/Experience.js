const express = require('express');
const router = express.Router();
const ExperienceModel = require('../models/ExperienceModel.js');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/experience');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async(req, res) => {
    try {

        let image = null
        if (req.file){
            image = req.file.path
        }
        const { duration, company, role, description } = await req.body

        if (!duration || !company || !role || !description ) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, image, date)' })
        }

        const newExperience = new ExperienceModel({
            duration,
            company,
            role,
            description,
            image
        });

        await newExperience.save()
        res.status(201).json({ message: 'Successfully created', data: newExperience })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async(req, res) => {
    try {


        const Experience = await ExperienceModel.find()
        if (!Experience.length > 0) {
            return res.status(404).json({ message: 'Experience are not available' })
        }
        res.status(200).json({ message: 'education fetched succesfully', data: Experience })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req, res) => {
    try {

        const Experience = await ExperienceModel.findById(req.params.id);
        if (!Experience) {
            return res.status(404).json({ message: 'Experience are not available' })
        }
        res.status(200).json({ message: `${req.params.id} fetched succesfully`, data: Experience })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {

        const deleteExperience = await ExperienceModel.findByIdAndDelete(req.params.id)
        if (!deleteExperience) {
            return res.status(404).json({ message: 'Experience are not available' })
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteExperience })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id',upload.single('image'), async(req, res) => {
    try {
        const body = await req.body
        if (req.file){
            body.image = req.file.path
        }
        const updateExperience = await ExperienceModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateExperience) {
            return res.status(404).json({ message: 'Experience are not available' })
        }
        res.status(200).json({ message: 'updated successfull', data: updateExperience })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;