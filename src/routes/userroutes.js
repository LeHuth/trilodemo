const express = require('express')
const router = express.Router()
const user_controller = require('../controller/usercontroller')


router.get('/',user_controller.get_all_users)
router.post('/create', user_controller.add_user)

module.exports = router
