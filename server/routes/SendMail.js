import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

const mailFunction = async(name, email, service, message, phone) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_PORT == 465, // Use `true` for secure (SSL) connections
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

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return { status: 200, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { status: 500, message: 'Failed to send email' };
    }
};

export default mailFunction;