const { Event } = require("../model/EventModel");

exports.event = async (req, res) => {
  try {
    const { status, title, description, date, location } = req.body;
    await Event.create({
      status,
      title,
      description,
      date,
      location,
    });
    res.status(201).json({
      success: true,
      message: "Event added successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
