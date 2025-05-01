// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.post('/api/join', async (req, res) => {
  const { name, enrollmentNo, email, contact } = req.body;

  const { data, error } = await supabase.from('join_request').insert([
    { name, enrollment_no: enrollmentNo, email, contact }
  ]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: 'Thank you for showing interest! Your form has been submitted successfully', data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
