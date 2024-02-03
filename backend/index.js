const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// PostgreSQL configuration
const { Client } = require('pg');
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "helpdesk",
  password: "KarthikPK007",
  port: 5432,
});

client.connect();

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Assuming you have a 'users' table in your database
    const result = await client.query('SELECT * FROM student WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      const user = result.rows[0];

      // Compare hashed password
      if (await bcrypt.compare(password, user.password_hash)) {
        // Generate JWT token
        const token = jwt.sign({ userId: user.student_id }, 'secret-key', { expiresIn: '1h' });

        res.json({ token });
        res.redirect('/dashboard');
      } else {
        res.status(401).json({ error: 'Invalid password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/register', async (req, res) => {
  const { name, password_hash, email, hostel_no, mobile_number, room_no, wing } = req.body;

  roll_no = email.slice(0, 9);
  console.log(roll_no);

  try {
    // Check if the username or email is already in use
    const checkExistingUser = await client.query('SELECT * FROM student WHERE name = $1 OR email = $2', [name, email]);

    if (checkExistingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username or email is already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password_hash, 10);

    // Insert the new user into the 'users' table
    await client.query('INSERT INTO student (name, password_hash, email, roll_no, hostel_no, wing, room_no, mobile_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [name, hashedPassword, email, roll_no, hostel_no, wing, room_no, mobile_number]);

    res.status(201).json({ message: 'User registered successfully' });
    res.redirect('/dashboard');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
