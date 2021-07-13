const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Welcome to the API!!!');
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
    res.status(statusCode);
    res.json({
        message,
    });
});

module.exports = app;
