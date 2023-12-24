import axios from "axios"
import dotenv from 'dotenv'

dotenv.config()

const curriculumInstance = axios.create({ baseURL: `${process.env.SPRINGBOOT_SERVER}/curriculum` })

export async function createCurriculum(req, res, next) {
    try {
        const { data } = await curriculumInstance.post('/create', req.body)

        return res.status(201).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}