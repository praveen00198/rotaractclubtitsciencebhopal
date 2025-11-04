const { zod } = require('zod');
const bcrypt = require('bcrypt');
const { Admin } = require("../model/AdminModel");

exports.admin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5)
    await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    res.status(500).json({ 
        success: false, 
        message: "Server error" });
  }
};
