const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;

//This variable is used to remove warnings using mongodb
const mongooseParams = {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex : true
}

mongoose.connect('mongodb://mongo/sqynode',mongooseParams);

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

const postRoute = require('./api/routes/postRoute');
postRoute(app);

const commentRoute = require('./api/routes/commentRoute');
commentRoute(app);

app.listen(port, hostname);

