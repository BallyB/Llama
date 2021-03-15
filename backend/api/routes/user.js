const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const experimentCtrl = require('../controllers/experiment');
const indexCtrl = require('../controllers/index');


router.get('/', indexCtrl.getAllLanguages);

//Route participants
router.post('/signupParticipant', userCtrl.signupParticipant);
router.post('/signinParticipant', userCtrl.loginParticipant);
router.get('/experiment', experimentCtrl.getAllExperiments);
router.get('/experiment/:id', experimentCtrl.getExperiment);

//Route chercheurs
router.post('/signupResearcher', userCtrl.signupResearcher);
router.post('/signinResearcher', userCtrl.loginResearcher);

router.get('/createExperiment', experimentCtrl.saveExperiment);
router.post('/saveExperiment', experimentCtrl.saveExperiment);


module.exports = router;