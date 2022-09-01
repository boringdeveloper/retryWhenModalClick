const express = require('express');
const app = express();

app.get('/hello-world', function(req, res) {
    res.status(500).send({ 'message': 'Hello World' });
});

app.listen(4000, function() {
    console.log('Running on port :4000');
});