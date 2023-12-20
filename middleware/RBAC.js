export const restrict = (...roles) => {
    return (req, res, next) => {
        const userRole = req.user.roles;

        roles.map((role) => {
            if (role === userRole) return res.status(401).json({ error: 'Unauthorized' })
        })
        next()
    }
}