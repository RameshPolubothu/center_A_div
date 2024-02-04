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
INSERT INTO student (roll_no, password_hash, name, hostel_no, room_no, wing, mobile_number, email, is_admin)
VALUES 
(210010039, '123456', 'Ramesh', 'hostel-2', '513', 'C', 9346567339, '210010039@gmail.com', false),
(210010012, '123456', 'Rahul', 'hostel-2', '510', 'B', 9865986544, '210010012@gmail.com', false),
(210020014, '123456', 'Praneeth', 'hostel-2', '510', 'B', 7878787878, '210020014@gmail.com', false),
(0, 'admin@123', 'admin', 'hostel-1', '111', 'A', 9999999999, '000000000@gmail.com', true);

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

INSERT INTO complaint (created_at, created_by, assigned_at,description, label, mailid)
VALUES 
(CURRENT_TIMESTAMP, 210010039,CURRENT_TIMESTAMP, 'There is a problem with the water supply in Hostel A.', 'water', 'admin@gmail.com'),
(CURRENT_TIMESTAMP, 210020014,CURRENT_TIMESTAMP, 'There is a problem with the electricity in Hostel B.', 'electricity', 'admin@gmail.com'),
(CURRENT_TIMESTAMP, 210010012,CURRENT_TIMESTAMP, 'There is a problem with the food in mess today.', 'food', 'admin@gmail.com');