
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Registration page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`WebApp running on port ${PORT}`);
});
