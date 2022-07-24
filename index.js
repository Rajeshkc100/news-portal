
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const ejs = require('ejs')

let app = express();

let port = 8080;

let newsRoute = require('./routes/newsRoutes');

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/NewsPortal');
const db = mongoose.connection;

db.once('open', () => {
    console.log('Mongodb is connected successfully');
});

app.use('/', newsRoute);

app.set('views', __dirname + '/views')
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

module.exports = app;