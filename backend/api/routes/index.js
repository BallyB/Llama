//On "require" les éléments nécessaires
const express = require('express');
const router = new express.Router();

const authboth = require('../middleware/authboth');
const indexCtrl = require('../controllers/index');
const checktoken = require('../middleware/checktoken');

router.use(checktoken);
router.get('/languages', authboth, indexCtrl.getAllLanguages);
router.get('/regions', authboth, indexCtrl.getAllRegions);

module.exports = router;