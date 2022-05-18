const express = require('express')
const router = express.Router()
const storeCtrl = require('../controllers/Store')

router.get('/products', storeCtrl.index)
router.get('/products/:slug', storeCtrl.show)

module.exports = router