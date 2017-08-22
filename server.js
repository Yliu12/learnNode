/**
 * Created by yliu12 on 2017/8/21.
 */

const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>hello express</h1>');
    res.send({
        name: 'yliu12',
        doing: 'learingNode'
    })
});

app.get('/about', (req, res) => {
    // res.send('<h1>hello express</h1>');
    res.send('<h1>about page</h1>')
});

app.get('/bad', (req, res) => {
    // res.send('<h1>hello express</h1>');
    res.send({
        errorMessage: 'unable to handle request',
        comment: 'testing'
    })
});


app.listen(3000);