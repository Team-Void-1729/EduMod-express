import axios from "axios";
import jwt from 'jsonwebtoken'

const authInstance = axios.create({ baseURL: `${process.env.IPV4}/educator` })

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

        return res.status(200).json({ token, name: data.name, role: data.roles })
    }
    catch (err) {
        return res.status(500).json(err)
    }
}


export async function getProfileById(req, res, next) {
    try {
        const { data } = await authInstance.get(`/profile/${req.params.id}`)

        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

export async function getProfileByIdAndUpdate(req, res, next) {
    try {
        const { data } = await authInstance.patch(`/update/${req.params.id}`, req.body)

        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

export async function deleteProfileById(req, res, next) {
    try {
        const { data } = await authInstance.delete(`/delete/${req.params.id}`)

        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}