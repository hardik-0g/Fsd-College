const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Welcome! Go to /data to view your local Mockaroo data.');
});

// Route to serve JSON data
app.get('/data', (req, res) => {
  const filePath = path.join(__dirname, 'csvjson.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading csvjson.json:', err);
      return res.status(500).send('Error reading local data file');
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).send('Invalid JSON format');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
