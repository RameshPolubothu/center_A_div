const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'hostel',
    password: 'KarthikPK007',
    port: 5432, // default PostgreSQL port
});

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL server');
        // Perform database operations here
    })
    .catch((error) => {
        console.error('Error connecting to PostgreSQL server', error);
    });