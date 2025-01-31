import express from 'express'
import dotenv from 'dotenv'
import Blog from './routes/Blog.js'
import Project from './routes/Project.js'
import Education from './routes/Education.js'
import Experience from './routes/Experience.js'
import Award from './routes/Award.js'
import About from './routes/About.js'
import Skill from './routes/Skill.js'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import mailFunction from './routes/SendMail.js'

dotenv.config({ path: '.env.development' })

const app = express()
app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'server started' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/api/mail', async(req, res) => {
    const { name, email, phone, service, message } = req.body
    const response = await mailFunction(name, email, service, message, phone);

    return res.status(response.status).json({ message: response.message });
})

app.use('/api/blog', Blog)
app.use('/api/project', Project)
app.use('/api/education', Education)
app.use('/api/experience', Experience)
app.use('/api/skill', Skill)
app.use('/api/award', Award)
app.use('/api/about', About)

const URL = process.env.URL
const PORT = process.env.PORT
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on ${URL}:${PORT}`)
})