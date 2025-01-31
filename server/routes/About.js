import { Router } from "express";
import dbConnect from "../lib/dbConnect.js";
import ExperienceModel from "../models/ExperienceModel.js";
import EducationModel from "../models/EducationModel.js";
import ProjectModel from "../models/ProjectModel.js";
import SkillModel from "../models/SkillModel.js";
import AwardModel from "../models/AwardModel.js";


const router = Router()

router.get('/', async(req, res) => {
    try {
        await dbConnect()
        const experience = await ExperienceModel.find()
        const education = await EducationModel.find()
        const award = await AwardModel.find()

        // if (!(experience.length > 0 || education.length > 0)) {
        //     return res.status(404).json({ message: 'please add the detail' })
        // }

        const timelineData = {
            education: education.length > 0 ? education : 'please add the education detail',
            experience: experience.length > 0 ? experience : 'please add the experience detail',
            award: award.length > 0 ? award : 'please add the award detail'
        }
        res.status(200).json({ message: 'success', data: timelineData })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/record', async(req, res) => {
    try {
        await dbConnect()
        const skills = await SkillModel.find()
        const projects = await ProjectModel.find()
        const awards = await AwardModel.find()

        const recordData = {
            skill: skills.length > 0 ? skills.length : 'please add the skills',
            project: projects.length > 0 ? projects.length : 'please add the project',
            award: awards.length > 0 ? awards.length : 'please add the awards detail'
        }

        res.status(200).json({ message: 'success', data: recordData })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router