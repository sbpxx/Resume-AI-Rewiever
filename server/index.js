const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test connexion
pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('DB connection error:', err.message);
  else console.log('DB connected:', res.rows[0].now);
});

app.get('/', (req, res) => {
  res.json({ message: 'Resume AI Reviewer API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
