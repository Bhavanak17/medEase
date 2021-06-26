const express = require("express");
const router = express.Router();

const { signup,signin, signout } = require('../controller/auth');
 const { resultValidator, registerValidator,loginValidator } = require("../validator/auth");

router.post("/signup",registerValidator,resultValidator, signup);
router.post("/signin",loginValidator,resultValidator,signin);
router.post("/signout", signout);

module.exports = router;