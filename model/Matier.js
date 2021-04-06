const mongoose = require('mongoose')
const { Schema } = mongoose
const schema = new Schema({
    name: String,
    nombreHours: Number,
    cofficient: Number,
})
module.exports = mongoose.model('Matier', schema);