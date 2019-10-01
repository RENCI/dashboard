const express = require('express')
const router = express.Router()
const ctsasController = require('../controllers/ctsas')

// Routes beginning with "HOSTNAME/ctsas/..."

router.route('/').get(ctsasController.list)
router.route('/').post(ctsasController.upload)

module.exports = router