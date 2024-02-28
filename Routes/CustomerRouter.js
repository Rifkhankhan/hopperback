const router = require('express').Router()
const { CreateForm } = require('../Controllers/CustomerController')

//add new request
router.post('/', CreateForm)

module.exports = router
