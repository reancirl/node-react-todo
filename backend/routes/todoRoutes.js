const express = require('express')
const router = express.Router()
const {index,store,update,destroy} = require('../controller/todoController')

router.route('/').get(index).post(store)
router.route('/:id').put(index).delete(store)

module.exports = router