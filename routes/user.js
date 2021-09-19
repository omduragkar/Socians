const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const userController = require('../controllers/userprofile');
const sign=require("../controllers/sign");
router.get('/thanks', homeController.thanks);
router.post('/create', sign.create);
router.get('/signin', sign.signin);
router.get('/signup', sign.signup);
router.post('/create-session', sign.createSession);
router.post('/create-session', sign.createSession);
router.post('/subscribed', userController.user)
router.get('/profile', userController.user);
router.get('/del',userController.del);
router.get('/signout',userController.signOut);

module.exports = router;