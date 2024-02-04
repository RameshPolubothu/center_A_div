-- create the database
-- CREATE DATABASE paradise;

-- create a table for student
CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    roll_no INTEGER UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(50) NOT NULL,
    hostel_no VARCHAR(50) NOT NULL,
    room_no VARCHAR(10) NOT NULL,
    wing CHAR(1) NOT NULL,
    mobile_number BIGINT NOT NULL,
    email VARCHAR(255) NOT NULL,
    is_admin boolean NOT NULL DEFAULT FALSE
);

CREATE TABLE complaint (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT current_timestamp,
    created_by INTEGER REFERENCES student(roll_no),
    assigned_at TIMESTAMP,
    description TEXT,
    label VARCHAR(20) CHECK (label IN ('food', 'water', 'electricity', 'hostel issues')), -- Add label column
    mailid VARCHAR(255), -- Add mailid column
    upvotes INTEGER DEFAULT 1
);
