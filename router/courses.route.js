import { Router } from "express"
import * as courseController from '../controllers/courses.controller.js'
import Auth from "../middleware/auth.js"
import { restrict } from "../middleware/RBAC.js"
import { ROLES } from "../entities/role.js"

const router = Router()


router.route('/details').get(courseController.getAllCourses)
router.route('/add').post(Auth, restrict(ROLES.Developer, ROLES.Educator), courseController.addCourse)


export { router as CourseRouter }