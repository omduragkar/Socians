const express=require('express');
const router=express.Router();
const homeController = require('../controllers/home_controller');
const userController = require('../controllers/userprofile');
const sign=require("../controllers/sign");
const { application } = require('express');
// const homeConstroller = require('../controllers/home_controller');
router.get('/', homeController.home);
router.use('/user', require('./user'));
router.use('/post', require('./post'));
module.exports = router;