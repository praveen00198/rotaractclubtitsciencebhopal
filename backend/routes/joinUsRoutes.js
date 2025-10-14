const express = require("express");
const router = express.Router();
const { joinUs } = require("../controllers/joinController");

router.post("/join", joinUs);

module.exports = router;
