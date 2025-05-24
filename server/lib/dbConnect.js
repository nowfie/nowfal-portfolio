const mongoose = require('mongoose')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const dbConnect = () => {
    mongoose.connect('mongodb+srv://ssnowfalkdnl:lafwon1113@myportfolio.p9hc1.mongodb.net/?retryWrites=true&w=majority&appName=myportfolio').then(() => {
        console.log('Connection established')
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = dbConnect