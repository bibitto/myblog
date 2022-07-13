import { createTransport } from 'nodemailer';
require('dotenv').config();

const postMail = async (
    req: { body: any },
    res: {
        status: (arg0: number) => { (): any; new (): any; json: { (arg0: { success: boolean }): void; new (): any } };
    }
) => {
    const transporter = createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_FROM,
            pass: process.env.GMAIL_PASS,
        },
    });
    await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: 'お問い合わせ from ブログ',
        text: req.body,
    });

    res.status(200).json({
        success: true,
    });
};

export default postMail;
