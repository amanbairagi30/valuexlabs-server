const express = require("express");
const {  sendMail, registerUser} = require("../controllers/usercontroller");
const router = express.Router();


router.route('/registerdata').post(registerUser);
router.route('/sendMail').post(registerUser,sendMail);

module.exports = router;