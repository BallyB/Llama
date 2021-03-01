const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');



//Route participants
router.post('/signupParticipant', userCtrl.signupParticipant);
router.post('/signinParticipant', userCtrl.loginParticipant);

//Route chercheurs
router.post('/signupResearcher', userCtrl.signupResearcher);
router.post('/signinResearcher', userCtrl.loginResearcher);


module.exports = router;