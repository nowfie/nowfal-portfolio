const express = require('express');
const router = express.Router();
const ReviewModel = require('../models/ReviewModel.js');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/review');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async(req, res) => {
    try {
        let image = null
        if (req.file) {
            image = req.file.path
        }
        const { name, location, role, message } = await req.body

        if (!name || !location || !role || !message ) {
            return res.status(400).json({ message: 'Please provide all required fields (title, message, image, date)' })
        }

        const newReview = new ReviewModel({
            name,
            location,
            role,
            message,
            image
        });

        await newReview.save()
        res.status(201).json({ message: 'Successfully created', data: newReview })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async(req, res) => {
    try {


        const Review = await ReviewModel.find()
        if (!Review.length > 0) {
            return res.status(404).json({ message: 'Review are not available' })
        }
        res.status(200).json({ message: 'Review fetched succesfully', data: Review })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req, res) => {
    try {

        const Review = await ReviewModel.findById(req.params.id);
        if (!Review) {
            return res.status(404).json({ message: 'Review are not available' })
        }
        res.status(200).json({ message: `${req.params.id} fetched succesfully`, data: Review })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {

        const deleteReview = await ReviewModel.findByIdAndDelete(req.params.id)
        if (!deleteReview) {
            return res.status(404).json({ message: 'Review are not available' })
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteReview })

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
        const updateReview = await ReviewModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateReview) {
            return res.status(404).json({ message: 'Review are not available' })
        }
        res.status(200).json({ message: 'updated successfull', data: updateReview })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;