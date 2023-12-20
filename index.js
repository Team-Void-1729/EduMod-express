import express from "express"
import cors from 'cors'
import morgan from "morgan"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import { CourseRouter } from "./router/courses.route.js"
import { AuthRouter } from "./router/auth.route.js"


const app = express()

dotenv.config()
app.use(express.json({ limit: '5mb' }))
app.use(cors(
    {
        origin: '*',
        methods: 'GET,POST,PUT,DELETE,PATCH',
        credentials: true
    }
))
app.use(morgan('tiny'))
app.disable('x-powered-by')
app.use(cookieParser())



app.use('/api/courses', CourseRouter)
app.use('/api/auth', AuthRouter)



const port = process.env.PORT || 5000
app.listen(port, '172.16.17.84', () => {
    console.log(`Server port: ${port}`)
})