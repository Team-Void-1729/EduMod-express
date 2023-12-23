import axios from "axios"

const courseInstance = axios.create({ baseURL: `${process.env.IPV4}/courses` })

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

        return res.status(201).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

export async function getCourse(req, res, next) {
    try {
        const { data } = await courseInstance.get(`/details/${req.params.title}`)

        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

export async function updateCourse(req, res, next) {
    try {
        const { data } = await courseInstance.patch(`/update/${req.params.id}`, req.body)

        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

export async function deleteCourse(req, res, next) {
    try {
        const { data } = await courseInstance.delete(`/delete/${req.params.id}`)

        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}