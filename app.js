
const express = require('express');
const calculator = require('./calculator.js');

const port = process.env.PORT || 3000;

const app = express();

app.get('/sum/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.sum(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

app.get('/subtract/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.subtract(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

app.get('/multiply/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.multiply(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

app.get('/division/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.division(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`));