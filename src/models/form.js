const { Schema, model } = require('mongoose');

//los datos ingresados se compara con el Schema definido
const formSchema = new Schema({
    nombre: { type: String, required: true},
    email: { type: String, required: true},
    programa: { type: String, required: true},
    created_at: { type: Date , default: Date.now}
});

//modelo de datos
module.exports = model('Form', formSchema);