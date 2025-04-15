const express = require("express");
const router = express.Router();
const { killApplication } = require("../controllers/logoutController");

router.get("/", killApplication);

module.exports = router;
