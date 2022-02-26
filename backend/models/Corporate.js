const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    location: String,
    sector: String,
    description: String
})

const Corporate = model('Corporate', schema);


module.exports = Corporate;