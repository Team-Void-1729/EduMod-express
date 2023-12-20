import nodemailer from 'nodemailer'
import Mailgen from 'mailgen'
import dotenv from 'dotenv'


dotenv.config()
let nodeConfig = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}



let transporter = nodemailer.createTransport(nodeConfig)

let MailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'Mailgen',
        link: 'https://mailgen.js/'
    }
})

export const registerMail = async (req, res) => {
    const { userEmail, genPassword, text, subject } = req.body

    var email = {
        body: {
            email: userEmail,
            password: genPassword,
            intro: text || 'Welcome to AICTE Portal',
        }
    }

    var emailBody = MailGenerator.generate(email)

    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: subject || 'Credential Provided',
        html: emailBody
    }

    transporter.sendMail(message)
        .then(() => {
            return res.status(200).json({ msg: 'You should receive an email' })
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
}