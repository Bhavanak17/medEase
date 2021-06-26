const express = require("express");
const { addQuery, getAllQuery } = require("../controller/query");
const { requireSignin } = require("../middleware/requirelogin");
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname)
    }
  })

  const upload = multer({storage});

router.post("/query/post", requireSignin, upload.single("queryPicture"), addQuery);
router.get("/query/get", getAllQuery);



module.exports = router;