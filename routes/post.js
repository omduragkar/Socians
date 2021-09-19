const express = require('express');
const router = express.Router();
const userController = require('../controllers/userprofile');
const { route } = require('./user');
router.post('/create',userController.post);
module.exports = router;