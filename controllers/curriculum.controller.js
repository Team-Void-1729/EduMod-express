import axios from "axios"

const curriculumInstance = axios.create({ baseURL: 'http://172.16.17.84:3030/curriculum' })

export async function createCurriculum(req, res, next) {
    try {
        const { data } = await curriculumInstance.post('/create', req.body)

        return res.status(201).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}