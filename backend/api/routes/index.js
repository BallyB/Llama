//On "require" les éléments nécessaires
const express = require('express');
const router = new express.Router();


const indexCtrl = require('../controllers/index');


router.get('/languages', indexCtrl.getAllLanguages);
router.get('/regions', indexCtrl.getAllRegions);

module.exports = router;