
const express = require('express');
const calculator = require('../calculator.js'); 
const router = express.Router();

router.get('/sum/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.sum(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

router.get('/subtract/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.subtract(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

router.get('/multiply/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.multiply(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

router.get('/division/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.division(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

router.get('/mod/:x/:y', (req, res) => {

    let x = parseInt(req.params.x, 10);
    let y = parseInt(req.params.y, 10);

    let result = calculator.mod(x, y);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: result
    }));

});

module.exports = router;