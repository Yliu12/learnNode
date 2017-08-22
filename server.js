/**
 * Created by yliu12 on 2017/8/21.
 */

const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log(`${now} : ${req.method} ${req.url}`);

    next();
});

app.use((req,res,next)=>{

    res.render('maintenance.hbs')

});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.get('/', (req, res) => {


    // res.send('<h1>hello express</h1>');
    res.render('home.hbs',{
        pageTitle:'home',
        currentYear: new Date().getFullYear(),
        welcomeMessage:'welcome to hihihi'
    })
});

app.get('/about', (req, res) => {
    // res.send('<h1>hello express</h1>');
    res.render('about.hbs',{
        pageTitle:'about Page',
    })
});

app.get('/bad', (req, res) => {
    // res.send('<h1>hello express</h1>');
    res.send({
        errorMessage: 'unable to handle request',
        comment: 'testing'
    })
});


app.listen(3000, () => {
    console.log('server is up on 3000');
});