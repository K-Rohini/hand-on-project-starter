const express = require('express');
const { registerUser , authUser ,bgRemover} = require('../Controllers/userController');
const router = express.Router()

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/remove').post(bgRemover);

module.exports=router;