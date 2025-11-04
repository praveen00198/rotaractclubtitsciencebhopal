const { JoinUs } = require("../model/JoinUsModel");

exports.joinus = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, contact, enrollment, skills, aboutRotaract } = req.body;
    await JoinUs.create({
      name,
      email,
      contact,
      enrollment,
      skills,
      aboutRotaract
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
