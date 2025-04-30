const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to your rotaract_form database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // or your MySQL username
  password: '',         // or your MySQL password
  database: 'rotaract_form'
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// POST endpoint for form submission
app.post('/submit-form', (req, res) => {
  const { name, enrollmentNo, email, contact } = req.body;

  const sql = `
    INSERT INTO join_request (name, enrollment_no, email, contact)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, enrollmentNo, email, contact], (err, result) => {
    if (err) {
      console.error('❌ Insert error:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    return res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
