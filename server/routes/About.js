const express = require('express')
const ExperienceModel = require('../models/ExperienceModel.js')
const EducationModel = require('../models/EducationModel.js')
const AwardModel = require('../models/AwardModel.js')
const SkillModel = require('../models/SkillModel.js')
const ProjectModel = require('../models/ProjectModel.js')


const router = express.Router()

router.get('/', async(req, res) => {
    try {

        const experience = await ExperienceModel.find()
        const education = await EducationModel.find()
        const award = await AwardModel.find()

        const timelineData = {
            education: education.length > 0 ? education : 'please add the education detail',
            experience: experience.length > 0 ? experience : 'please add the experience detail',
            award: award.length > 0 ? award : 'please add the award detail'
        }
        res.status(200).json({ message: 'timeline fetched succesfully', data: timelineData })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/record', async(req, res) => {
    try {
        const skills = await SkillModel.find()
        const solutions = await ProjectModel.find({ freelance: true })
        const awards = await AwardModel.find()
        const prototypes = await ProjectModel.find({ freelance: false })

        const recordData = {
            skill: skills.length > 0 ? skills.length : 'please add the skills',
            solution: solutions.length > 0 ? solutions.length : 'please add the freelances',
            prototype: prototypes.length > 0 ? prototypes.length : 'please add the prototype',
            award: awards.length > 0 ? awards.length : 'please add the awards detail'
        }

        res.status(200).json({ message: 'records fetched succesfully', data: recordData })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router