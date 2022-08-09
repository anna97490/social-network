const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controllers');

router.get('/:id', userCtrl.getOneUser);

module.exports = router;
