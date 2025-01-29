import express from 'express'
import dotenv from 'dotenv'
import Blog from './routes/Blog.js'
import Project from './routes/Project.js'
import Education from './routes/Education.js'
import Experience from './routes/Experience.js'
import About from './routes/About.js'
import Skill from './routes/Skill.js'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'server started' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.use('/api/blog', Blog)
app.use('/api/project', Project)
app.use('/api/education', Education)
app.use('/api/experience', Experience)
app.use('/api/skill', Skill)
app.use('/api/about', About)

const URL = process.env.URL || 'http://192.168.29.132'
const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on ${URL}:${PORT}`)
})