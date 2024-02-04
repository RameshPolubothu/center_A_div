const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "helpdesk",
  password: "KarthikPK007",
  port: 5432,
});

client.connect();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await client.query(
      "SELECT * FROM student WHERE email = $1",
      [email]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];

      if (await bcrypt.compare(password, user.password_hash)) {
        const isAdmin = user.is_admin;

        // Create and sign a JWT token
        const token = jwt.sign({ userId: user.id, isAdmin }, 'your_jwt_secret');

        // Send the token and isAdmin flag in the response
        res.json({ token, isAdmin });
      } else {
        res.status(401).json({ error: "Invalid password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  const {
    name,
    password_hash,
    email,
    hostel_no,
    mobile_number,
    room_no,
    wing,
  } = req.body;

  roll_no = email.slice(0, 9);
  console.log(roll_no);

  try {
    const checkExistingUser = await client.query(
      "SELECT * FROM student WHERE name = $1 OR email = $2",
      [name, email]
    );

    if (checkExistingUser.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "Username or email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password_hash, 10);

    await client.query(
      "INSERT INTO student (name, password_hash, email, roll_no, hostel_no, wing, room_no, mobile_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        name,
        hashedPassword,
        email,
        roll_no,
        hostel_no,
        wing,
        room_no,
        mobile_number,
      ]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/complaintRegister", async (req, res) => {
  const { description, rollNumber, issue } = req.body;

  try {
    await client.query(
      "INSERT INTO complaint (created_by, assigned_at, label, description, mailid) VALUES ($1, current_timestamp, $2, $3, $4)",
      [rollNumber, issue, description, "admin@gmail.com"]
    );

    res.status(200).json({ message: "Complaint registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/complaintsList", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM complaint");
    const complaints = result.rows;

    res.json(complaints);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete('/admin/complaints/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Perform the deletion in the database based on the complaint ID
    const result = await client.query('DELETE FROM complaint WHERE id = $1', [id]);

    if (result.rowCount === 1) {
      res.json({ success: true, message: 'Complaint marked as done' });
    } else {
      res.status(404).json({ success: false, message: 'Complaint not found' });
    }
  } catch (error) {
    console.error('Error deleting complaint:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
