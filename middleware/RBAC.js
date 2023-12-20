export const restrict = (...role) => {
    return (req, res, next) => {
        const userRoles = req.user.roles

        if (!userRoles.some((r) => role.includes(r))) {
            throw new Error('Unauthorized Access')
        }
        next()
    }
}