//On "require" les éléments nécessaires
const express = require('express');
const router = new express.Router();

const checktoken = require('../middleware/checktoken');
const indexCtrl = require('../controllers/index');
const authboth = require('../middleware/authboth');

//router.use(checktoken);
router.get('/languages', authboth, indexCtrl.getAllLanguages);
router.get('/regions', authboth, indexCtrl.getAllRegions);
router.get('/laboratories', authboth, indexCtrl.getAllLaboratories);
router.get('/schoolDegrees', authboth, indexCtrl.getAllschoolDegrees);

module.exports = router;