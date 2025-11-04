const express = require("express");
const router = express.Router();
const { joinus } = require("../controllers/joinushandler");

router.post("/join", joinus);

module.exports = router;
