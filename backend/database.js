const mongoose = require('mongoose');

//cadena de conexion
//seguridad. configuracion con variables de entorno

mongoose.connect( process.env.MONGODB_URI, {
    useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));