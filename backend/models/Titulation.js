const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    year_Start: Date,
    year_End: Date
})

const Titulation = model('Titulation', schema);


module.exports = Titulation;