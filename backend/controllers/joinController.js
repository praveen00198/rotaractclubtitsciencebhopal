const supabase = require("../config/db");

async function joinUs(req, res) {
  const { name, email, contact_no, enrollment_no, skills, source } = req.body;

  const { data, error } = await supabase
    .from("join_us")
    .insert([{ name, email, contact_no, enrollment_no, skills, source }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: "Thank you for showing interest you form has been submutted successfully!", data });
}

module.exports = { joinUs };
