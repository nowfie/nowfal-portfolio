const express = require('express');
const router = express.Router();
const EducationModel = require('../models/EducationModel.js');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/education');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async(req, res) => {
    try {

        const image = req.file.path
        const { duration, institution, degree, description } = await req.body

        if (!duration || !institution || !degree || !description || !image) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, image, date)' })
        }

        const newEducation = new EducationModel({
            duration,
            institution,
            degree,
            description,
            image
        });

        await newEducation.save()
        res.status(201).json({ message: 'Successfully created', data: newEducation })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async(req, res) => {
    try {


        const education = await EducationModel.find()
        if (!education.length > 0) {
            return res.status(404).json({ message: 'education are not available' })
        }
        res.status(200).json({ message: 'education fetched succesfully', data: education })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req, res) => {
    try {

        const education = await EducationModel.findById(req.params.id);
        if (!education) {
            return res.status(404).json({ message: 'education are not available' })
        }
        res.status(200).json({ message: `${req.params.id} fetched succesfully`, data: education })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {

        const deleteEducation = await EducationModel.findByIdAndDelete(req.params.id)
        if (!deleteEducation) {
            return res.status(404).json({ message: 'education are not available' })
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteEducation })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const body = await req.body

        const updateEducation = await EducationModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateEducation) {
            return res.status(404).json({ message: 'education are not available' })
        }
        res.status(200).json({ message: 'updated successfull', data: updateEducation })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;