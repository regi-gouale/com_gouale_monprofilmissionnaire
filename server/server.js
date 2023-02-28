const express = require('express');


const app = express();

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/../index.html');
});

app.listen(80, () => {
    console.log('Server is running on port 80');
});