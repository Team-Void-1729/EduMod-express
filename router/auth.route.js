import { Router } from "express"
import * as authController from '../controllers/auth.controller.js'
import { registerMail } from "../utils/mail.js"

const router = Router()


router.route('/add').post(authController.addEducator)
router.route('/login').post(authController.loginEducator)
router.route('/profile/:id').get(authController.getProfileById)
router.route('/update/:id').patch(authController.getProfileByIdAndUpdate)
router.route('/delete/:id').delete(authController.deleteProfileById)
router.route('/mail').post(registerMail)


export { router as AuthRouter }