const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    year_Start: Date,
    year_End: Date
})

const Experience = model('Experience', schema);


module.exports = Experience;