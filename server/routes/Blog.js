import express, { Router } from 'express'
import dbConnect from '../lib/dbConnect.js'
import BlogModel from '../models/BlogModel.js'
import multer from 'multer';

const router = Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/blog');
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
        const { title, description, content, message, conclusion, date } = await req.body

        if (!title || !description || !image || !date) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, image, date)' })
        }

        const newBlog = new BlogModel({
            title,
            description,
            content: JSON.parse(content),
            message,
            conclusion,
            image,
            date
        });

        await newBlog.save()
        res.status(201).json({ message: 'Successfully created', data: newBlog })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async(req, res) => {
    try {
        await dbConnect()

        const blogs = await BlogModel.find()
        if (!blogs.length > 0) {
            return res.status(404).json({ message: 'Blogs are not available' })
        }
        res.status(200).json({ message: 'Blogs fetched succesfully', data: blogs })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:name', async(req, res) => {
    try {
        await dbConnect()
        const blog = await BlogModel.findOne({ title: req.params.name });
        if (!blog) {
            return res.status(404).json({ message: 'Blogs are not available' })
        }
        res.status(200).json({ message: `${req.params.name} fetched succesfully`, data: blog })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        await dbConnect()
        const deleteBlog = await BlogModel.findByIdAndDelete(req.params.id)
        if (!deleteBlog) {
            return res.status(404).json({ message: 'Blogs are not available' })
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteBlog })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const body = await req.body
        await dbConnect()
        const updateBlog = await BlogModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateBlog) {
            return res.status(404).json({ message: 'Blogs are not available' })
        }
        res.status(200).json({ message: 'updated successfull', data: updateBlog })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router