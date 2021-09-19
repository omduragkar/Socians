const express = require('express');
// var bparser = require('body-parser');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const app = express();
const port = 5000;
// var jsonparser = bparser.json();
// var urlencode = bparser.urlencoded();
// Using express router:
// app.con(funn)
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use('/', require('./routes'));
const db = require('./config/mongoose');
//Setup view Engine:
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./assets'));
app.listen(port, function(err)
{
    if(err)
    {
        console.error(`${port} error... server not started`);
    }
    console.log(`Wohoo !! Server started @: ${port}`);
    // console.log("date: ", Date.now());
})
