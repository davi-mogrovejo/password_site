const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

// Replace this with a secure way to store passwords in a real application
const correctPassword = 'securepassword';

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const passwordAttempt = req.body.password;

    if (passwordAttempt === correctPassword) {
        res.send('Correct password! Welcome!');
    } else {
        res.send('Incorrect password. Try again.');
    }
});

const options = {
    key: fs.readFileSync('path/to/your/private-key.pem'),
    cert: fs.readFileSync('path/to/your/certificate.pem'),
};

https.createServer(options, app).listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
});
