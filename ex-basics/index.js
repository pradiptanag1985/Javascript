const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');
const app = express();

//app.get('/', (req, res) => {
    //res.send('Hello World!!');
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

//Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index', {
    title : 'Index Handlebars',
    members
}));

//Init Middleware
app.use(logger);

//Body parser Middleware
app.use(express.json());

//Form submission
app.use(express.urlencoded({extended : false}));



app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));