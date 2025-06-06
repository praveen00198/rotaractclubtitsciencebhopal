require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.post("/api/join", async (req, res) => {
  const { name, enrollmentNo, email, contact } = req.body;

  if (!name || !enrollmentNo || !email || !contact) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const { data, error } = await supabase
      .from("join_request")
      .insert([{ name, enrollment_no: enrollmentNo, email, contact }]);

    if (error) {
      return res.status(500).json({ error: "Failed to save form data." });
    }

    res.status(200).json({
      message: "Thank you for joining! Your form was submitted successfully.",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
});

app.get("/", (req, res) => {
  res.send("Join Us Server is running.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
