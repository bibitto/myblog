import { createTransport } from 'nodemailer';

const postMail = async (req, res) => {
    const transporter = createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'bibitto.crypto@gmail.com', //process.env.MAIL_USER,
            pass: 'nbkritryaaafderr', //process.env.MAIL_PASS,
        },
    });
    await transporter.sendMail({
        from: 'bibitto.crypto@gmail.com', //process.env.MAIL_USER,
        to: 'kawano.sho1118@gmail.com', //process.env.MAIL_TO,
        subject: 'お問い合わせ from ブログ',
        text: req.body,
    });

    res.status(200).json({
        success: true,
    });
};

export default postMail;
