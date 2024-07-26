import { createTransport } from 'nodemailer'

console.log(process.env.EMAIL)

export const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});