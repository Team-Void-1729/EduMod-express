import { Router } from "express"
import * as courseController from '../controllers/courses.controller.js'
import Auth from "../middleware/auth.js"
import { restrict } from "../middleware/RBAC.js"
import { ROLES } from "../entities/role.js"

const router = Router()


router.route('/add').get(Auth, restrict(ROLES.Developer, ROLES.Educator), courseController.addCourse)
router.route('/update/:id').get(Auth, restrict(ROLES.Developer, ROLES.Educator), courseController.updateCourse)
router.route('/delete/:id').get(Auth, restrict(ROLES.Developer, ROLES.Educator), courseController.deleteCourse)
router.route('/details').get(courseController.getAllCourses)
router.route('/details/:title').get(courseController.getCourse)


export { router as CourseRouter }