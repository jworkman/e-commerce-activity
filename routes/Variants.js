const express = require('express')
const router = express.Router()
const variantCtrl = require('../controllers/Variants')

router.get('/', variantCtrl.index)
router.get('/new', variantCtrl.form)
router.get('/:id', variantCtrl.show)
router.get('/:id/edit', variantCtrl.form)
router.post('/', variantCtrl.create)
router.post('/:id', variantCtrl.update)
router.delete('/:id', variantCtrl.remove)
router.get('/:id/delete', variantCtrl.remove)

module.exports = router