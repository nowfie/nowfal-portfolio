function mailFunction(email, password, mealsUsed) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ssnowfalkdnl@gmail.com',
            pass: 'etfk fyxw amsk gzao'
        }
    });

    const mailOptions = {
        from: 'ssnowfalkdnl@gmail.com',
        to: email,
        subject: 'Your Generated Password and Meal Count',
        text: `Hello,\n\nYour generated password is: ${password}\n\nMeals used: ${mealsUsed}\n\nThank you!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email: ', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}