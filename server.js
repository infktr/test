/*******************/
/* Require Modules */
/*******************/
const express = require('express');


/***********************/
/* Instantiate Express */
/***********************/
const app     = express();



/*********************/
/* Customize Express */
/*********************/
// Set the port to the server default or 3000
const port = process.env.PORT || 3000;

// Sets the templating to Embedded JavaScript(EJS)
app.set('view engine', 'ejs');

// Sets the default view directory
app.set('views', './app/views');

// Sets a static public folder
app.use(express.static(__dirname + '/public'));



/******************/
/* Express Routes */
/******************/
app.get('/', function(req, res) {
    res.render('static/home.ejs', {
        title : "Home",
    });
});

app.get('/about', function(req, res) {
    res.render('static/about.ejs', {
        title : "About",
    });
});



/*****************/
/* Launch Server */
/*****************/
app.listen(port, function () {
	console.log(`Listening on port ${port}!`);
});

