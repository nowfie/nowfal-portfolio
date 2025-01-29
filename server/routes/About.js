import { Router } from "express";
import dbConnect from "../lib/dbConnect.js";
import ExperienceModel from "../models/ExperienceModel.js";
import EducationModel from "../models/EducationModel.js";


const router = Router()

router.get('/', async(req, res) => {
    try {
        await dbConnect()
        const experience = await ExperienceModel.find()
        const education = await EducationModel.find()

        // if (!(experience.length > 0 || education.length > 0)) {
        //     return res.status(404).json({ message: 'please add the detail' })
        // }

        const timelineData = {
            education: education.length > 0 ? education : 'please add the education detail',
            experience: experience.length > 0 ? experience : 'please add the experience detail'
        }
        res.status(200).json({ message: 'success', data: timelineData })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router