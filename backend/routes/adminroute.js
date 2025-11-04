const express = require("express");
const router = express.Router();
const { admin } = require("../controllers/adminhandler");

router.post('/admin', admin)

module.exports = router;
