import axios from "axios"

const courseInstance = axios.create({ baseURL: 'http://172.16.17.84:3030/courses' })

export async function getAllCourses(req, res, next) {
    try {
        const { data } = await courseInstance.get('/details')

        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

export async function addCourse(req, res, next) {
    try {
        const { data } = await courseInstance.post('/add', req.body)

        return data
    }
    catch (err) {
        return res.status(500).json(err)
    }
}