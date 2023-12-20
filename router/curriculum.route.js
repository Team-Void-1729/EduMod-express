import { Router } from "express"
import * as curriculumController from '../controllers/curriculum.controller.js'
import Auth from "../middleware/auth.js"
import { restrict } from "../middleware/RBAC.js"
import { ROLES } from "../entities/role.js"

const router = Router()


router.route('/details').get()


export { router as CurriculumRouter }