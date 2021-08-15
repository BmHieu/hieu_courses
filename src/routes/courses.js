const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CoursesController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:slug', courseController.show)
router.get('/:id/edit', courseController.edit)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.forcedelete)

module.exports = router