
const router = require('express').Router()

// -> Importing services js
const usersServices = require ('./users.services')

/*************** GETTING INFO USERS ******************/

// /users [>>GET<<, POST]
router.get('/crud', usersServices.getCrud)


// /users/:id [GET]
router.get('/crud/:id', usersServices.getOneUsers)

/*************** POSTING INFO NEW USERS ******************/


// /users [GET, >>POST<<]
router.post('/crud', usersServices.createNewUser)

//? export default

module.exports = router