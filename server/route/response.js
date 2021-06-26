const express = require("express");
const { submitResponse, getResponse } = require("../controller/response");
const { requireSignin } = require("../middleware/requirelogin");
const router = express.Router();

router.post("/response/post", requireSignin , submitResponse);
router.get("/response/get", getResponse);

module.exports = router;