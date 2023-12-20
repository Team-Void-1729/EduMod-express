import axios from "axios";
import jwt from 'jsonwebtoken'

const authInstance = axios.create({ baseURL: 'http://172.16.17.84:3030/educator' })

export async function addEducator(req, res, next) {
    try {
        const { data } = await authInstance.post('/add', req.body)

        return res.status(201).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}


export async function loginEducator(req, res, next) {
    try {
        const { data } = await authInstance.post('/login', req.body)

        const token = jwt.sign(
            {
                userId: data.eduid,
                email: data.email,
                roles: data.roles
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        // console.log(data);

        return res.status(200).json({ token, role: data.roles })
    }
    catch (err) {
        return res.status(500).json(err)
    }
}