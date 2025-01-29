import express, { Router } from 'express'
import dbConnect from '../lib/dbConnect.js'
import BlogModel from '../models/BlogModel.js'

const router = Router()

router.post('/', async(req, res) => {
    try {
        await dbConnect()
        const { title, description, content, message, conclusion, image, date } = await req.body

        if (!title || !description || !image || !date) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, image, date)' })
        }

        const newBlog = new BlogModel({
            title,
            description,
            content,
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
            res.status(404).json({ message: 'Blogs are not available' })
        }
        res.status(200).json({ message: 'Hello world', data: blogs })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:name', async(req, res) => {
    try {
        await dbConnect()
        const blog = await BlogModel.findOne({ title: req.params.name });
        if (!blog) {
            res.status(404).json({ message: 'Blogs are not available' })
        }
        res.status(200).json({ message: 'Hello world', data: blog })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        await dbConnect()
        const deleteBlog = await BlogModel.findByIdAndDelete(req.params.id)
        if (!deleteBlog) {
            res.status(404).json({ message: 'Blogs are not available' })
        }
        res.status(200).json({ message: 'update successfull', data: deleteBlog })

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
            res.status(404).json({ message: 'Blogs are not available' })
        }
        res.status(200).json({ message: 'update successfull', data: updateBlog })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router