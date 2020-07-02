const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const router = require('./route')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(fileUpload());

app.use(express.static('./public'));

app.use(function (req, res, next) {
    // console.log(req.url);
    next();
})
app.use(session({ secret: 'pablo dakfare', cookie: { maxAge: 60000 } }))
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    next();
});
app.use(router);

app.listen(3000);
console.log('you are listening to port 3000');

