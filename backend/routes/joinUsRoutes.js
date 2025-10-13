const express = require("express");
const router = express.Router();
const JoinUs = require("../models/join-us");

// Submit Join Us form
router.post("/", async (req, res) => {
  try {
    const { name, email, contact, enrollment, skills, source } = req.body;
    const formData = await join-us.create({ name, email, contact, enrollment, skills, source });
    res.status(201).json({ message: "Form submitted successfully!", data: formData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Optional: Get all submissions
router.get("/", async (req, res) => {
  try {
    const submissions = await join-us.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
