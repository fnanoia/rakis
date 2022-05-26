//modulo env. definimos nuestro entorno de trabajo
//desarrollo o produccion
/*if(process.env.NODE_ENV == 'development'){*/
require('dotenv').config();

const express = require('express');
const path = require('path');//reconoce y ubica el archivo que estamos queriendo referenciar
const morgan = require('morgan');
const multer = require('multer');//procesa img
const cors = require('cors');

//init express
const app = express();
//connect DB
require('./database');

//settings
app.set('port', process.env.PORT || 3000);//si hay un puerto definido en variables de entorno lo utiliza, sino el 3000
/*app.set('views', path.join(__dirname, 'public/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');*/

//middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination : path.join(__dirname, 'public/uploads'),
    filename(req, file, cb){
        cb(null, file.originalname);
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));//interpreta formularios como JSON
app.use(express.json());//interpreta peticiones JSON
app.use(cors());

//routes
app.use('/api/forms', require('./routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//server listener
app.listen(app.set('port'), ()=>{
    console.log('Server working on port:', app.set('port'));
})