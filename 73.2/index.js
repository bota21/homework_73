const express = require('express');
const app = express();
const port = 2100;
const Caesar = require('caesar-salad').Caesar;

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.get('/encode/:text', (req, res) => {
    res.send(Caesar.Cipher('c').crypt(req.params.text));
});

app.get('/decode/:text', (req, res) => {
    res.send(Caesar.Decipher('c').crypt(req.params.text));
});

app.listen(port, () => {
    console.log('Server started');
});