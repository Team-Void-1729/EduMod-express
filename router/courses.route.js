import { Router } from "express"
import * as courseController from '../controllers/courses.controller.js'
import { adminAccess } from "../middleware/RBAC.js"
import Auth from "../middleware/auth.js"

const router = Router()


router.route('/details').get(courseController.getAllCourses)
router.route('/add').post(Auth, adminAccess, courseController.addCourse)


export { router as CourseRouter }