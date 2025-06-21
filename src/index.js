const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ensure the correct path to the database file
const dbPath = path.resolve(__dirname, '../database/my-database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando: http://localhost:${port}`);
});
