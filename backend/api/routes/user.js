const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');





//router.get('/:id', userCtr.login);

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.login);


module.exports = router;