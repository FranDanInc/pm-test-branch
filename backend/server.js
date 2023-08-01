// backend/server.js
require('dotenv').config();

// Access the environment variables as process.env.VARIABLE_NAME
// For example: process.env.GSHEETS_CLIENT_EMAIL

// server.js
const express = require('express');
const { google } = require('googleapis');

const app = express();
const PORT = 3001;

// Set up Google Sheets API credentials (OAuth 2.0)
const auth = new google.auth.GoogleAuth({
  // Your credentials here (API key or OAuth 2.0 credentials)
});

// Google Sheets API instance
const sheets = google.sheets({ version: 'v4', auth });

// Example API endpoint to get user data from Google Sheets
app.get('/api/users', async (req, res) => {
  const spreadsheetId = '1cuGDe7fsJWst8ValCM46Od3ckiW3QNjTGtv40NYaxYc';
  const range = 'Sheet1!A2:C'; // Assuming the user data is in columns A to C, and the first row is the header.

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error reading user data from Google Sheets.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
