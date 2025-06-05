require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const multer = require("multer");

const app = express();
app.use(cors());

// Don't apply express.json() before multer handles form-data
// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// JSON middleware only used for JSON requests like /api/join
app.use(express.json());

// 📥 Join Form
app.post("/api/join", async (req, res) => {
  const { name, enrollmentNo, email, contact } = req.body;

  const { data, error } = await supabase
    .from("join_request")
    .insert([{ name, enrollment_no: enrollmentNo, email, contact }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({
    message: "Thank you for showing interest! Your form has been submitted successfully",
    data,
  });
});

// 💰 Donation Form (Multipart handler)
app.post("/api/donate", upload.single("screenshot"), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const file = req.file;

    console.log("Received text fields:", { name, email, phone });
    console.log("Received file:", file);

    if (!file || !name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const ext = file.originalname.split(".").pop();
    const fileName = `${Date.now()}.${ext}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("donation-screenshots")
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("🛑 Image upload error:", uploadError);
      return res.status(500).json({ error: "Image upload failed" });
    }

    const { data: insertData, error: insertError } = await supabase
      .from("donations")
      .insert([{ name, email, phone, image_path: uploadData.path }]);

    if (insertError) {
      console.error("🛑 Supabase insert error:", insertError);
      return res.status(500).json({ error: "Database insert failed", insertError });
    }

    res.json({ message: "Donation submitted successfully", data: insertData });
  } catch (err) {
    console.error("🚨 Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Test route for debugging form-data
app.post("/api/test", upload.none(), (req, res) => {
  console.log("Received fields (test):", req.body);
  res.json({ fields: req.body });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
