const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    identificacion: Number,
    Nombre: String,
    estado: Boolean,
    rol: String,

})

module.exports = mongoose.model('usuarios', UsuarioSchema);