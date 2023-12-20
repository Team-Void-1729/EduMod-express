import { Router } from "express"
import * as authController from '../controllers/auth.controller.js'
import { registerMail } from "../utils/mail.js"

const router = Router()


router.route('/add').get(authController.addEducator)
router.route('/login').get(authController.loginEducator)
router.route('/profile/:id').get(authController.getProfileById)
router.route('/update/:id').get(authController.getProfileByIdAndUpdate)
router.route('/delete/:id').get(authController.deleteProfileById)
router.route('/mail').post(registerMail)


export { router as AuthRouter }