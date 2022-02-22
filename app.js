
const express = require('express');
const calculatorRouter = require('./router/calculator.router.js');

const port = process.env.PORT || 3000;

const app = express();
app.use('/calculator', calculatorRouter); 

app.get('/', (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        result: 'Welcome my friend!!'
    }));

});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`));