const express = require('express')
const controller = require('../controllers/category')
const router = express.Router()
const passport = require('passport')

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.patch('/:id', controller.update)


module.exports = router