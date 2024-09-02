import express from 'express'

// Controllers  
import {GetUsersNames, GetSingleUserName} from '../controllers/app-controllers.js'


//:: ROUTES
const router = express.Router()

router
.get('/my-users', GetUsersNames)

.get('/my-users/:id', GetSingleUserName)

//Export to routes
export default router