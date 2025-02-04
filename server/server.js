const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

const Blog = require('./routes/Blog.js');
const Project = require('./routes/Project.js');
const Education = require('./routes/Education.js');
const Experience = require('./routes/Experience.js');
const Award = require('./routes/Award.js');
const About = require('./routes/About.js');
const Skill = require('./routes/Skill.js');
const mailFunction = require('./routes/SendMail.js');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api', (req, res) => {
    try {
        res.status(200).json({ message: 'server started' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/mail', (req, res) => {
    const { name, email, phone, service, message } = req.body;
    try {
        const response = mailFunction(name, email, service, message, phone);
        return res.status(response.status).json({ message: response.message });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.use('/api/blog', Blog);
app.use('/api/project', Project);
app.use('/api/education', Education);
app.use('/api/experience', Experience);
app.use('/api/skill', Skill);
app.use('/api/award', Award);
app.use('/api/about', About);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});