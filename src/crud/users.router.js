const router = require('express').Router()

const usersServices = require ('./users.services')

router.get('/crud', usersServices.getCrud)

router.post('/crud', usersServices.createNewUser)

router.get('/crud/:id', usersServices.getOneUsers)

module.exports = router