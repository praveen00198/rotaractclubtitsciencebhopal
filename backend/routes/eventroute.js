const express = require("express");
const router = express.Router();
const { event } = require("../controllers/eventhandler");

router.post('/event', event)

module.exports = router;
