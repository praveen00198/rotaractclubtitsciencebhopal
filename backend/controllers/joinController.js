const supabase = require("../config/db");

async function joinUs(req, res) {
  const { name, email, contact, enrollment, skills, source } = req.body;

  const { data, error } = await supabase
    .from("join_us")
    .insert([{ name, email, contact, enrollment, skills, source }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: "Joined successfully!", data });
}

module.exports = { joinUs };
