//On "require" les éléments nécessaires
const express = require('express');
const router = new express.Router();


const indexCtrl = require('../controllers/index');


router.get('/languages', indexCtrl.getAllLanguages);
router.get('/regions', indexCtrl.getAllRegions);
router.get('/laboratories', indexCtrl.getAllLaboratories);
router.get('/schoolDegrees', indexCtrl.getAllschoolDegrees);

module.exports = router;