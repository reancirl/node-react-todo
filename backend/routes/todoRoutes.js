const express = require('express')
const router = express.Router()
const {index,store,update,destroy,updateStatus} = require('../controllers/todoController')

router.route('/').get(index).post(store)
router.route('/:id').put(update).patch(updateStatus).delete(destroy)

module.exports = router