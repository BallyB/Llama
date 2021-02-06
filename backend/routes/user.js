const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const userCtr = require('../controllers/userController.js');





//router.get('/:id', userCtr.login);

router.post('/signup', userCtr.signup);


module.exports = router;