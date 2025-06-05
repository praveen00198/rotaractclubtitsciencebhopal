// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 👤 Join API (Optional - You already had this)
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

// 💰 Donation API
app.post("/api/donate", upload.single("screenshot"), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const file = req.file;

    if (!file || !name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 📤 Upload image to Supabase storage
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

    console.log("✅ Image uploaded:", uploadData.path);
    console.log("📥 Preparing to insert:", { name, email, phone, image_path: uploadData.path });

    // 📝 Insert into `donations` table
    const { data, error } = await supabase
      .from("donations")
      .insert([{ name, email, phone, image_path: uploadData.path }]);

    if (error) {
      console.error("🛑 Supabase insert error:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
        table: error.table,
      });
      return res.status(500).json({ error: "Database insert failed", supabaseError: error });
    }

    res.json({ message: "Donation submitted successfully", data });
  } catch (err) {
    console.error("🚨 Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
