import { ROLE } from "../entities/educator.role.js"

export async function adminAccess(req, res, next) {
    try {
        const role = req.user.roles

        if (role === ROLE.Admin) next()
        else return res.status(401).json({ error: 'Unauthorized' })
    }
    catch (error) {
        res.status(401).json({ error: 'Roles not defined' })
    }
}



export async function userAccess(req, res, next) {
    try {
        const role = req.user.roles

        if (role === ROLE.User) next()
        else return res.status(401).json({ error: 'Unauthorized' })
    }
    catch (error) {
        res.status(401).json({ error: 'Roles not defined' })
    }
}