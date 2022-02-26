const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    date: Date,
    titulation: {type: Schema.Types.ObjectId, ref:'Titulation'}
})

const Achieve = model('Achieve', schema);


module.exports = Achieve;