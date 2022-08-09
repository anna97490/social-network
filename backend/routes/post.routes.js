const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post.controllers');

router.get('/:id', postCtrl.getOnePost);

module.exports = router;
