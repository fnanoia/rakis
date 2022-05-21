const express = require('express');
const app = express();

const path = require('path');//reconoce y ubica el archivo que estamos queriendo referenciar
const morgan = require('morgan');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



//middlewares
//app.get(express.JSON());
app.get(morgan('dev'));

//routes
app.use(require('./routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//server listener
app.listen(app.set('port'), ()=>{
    console.log('Server working on port:', app.set('port'));
})