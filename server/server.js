// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebaseAdmin = require('firebase-admin');
const dataController = require('./controllers/dataController');


const path = require('path');

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());
// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'client', 'build')));


// Define route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src','Pages','LoginPage', 'LoginPage.jsx'));
});

// Define other routes to render different frontend views
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

