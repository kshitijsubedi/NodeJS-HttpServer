const express = require("express");
const registerController = require("../controller/registerController");
const loginController = require("../controller/loginController");

const router = express.Router();

router.route("/register").post(registerController);
router.route("/login").post(loginController);

module.exports = router;
