import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

const mailFunction = (name, email, service, message, phone) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Project query from ${name} for ${service}`,
        text: `Hello,\n\n${message}\n\nFrom: ${phone} and ${email}\n\nThank you!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return;
        }
        console.log('Email sent:', info.response);
    });
}


export default mailFunction