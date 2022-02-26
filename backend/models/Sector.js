const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    offer: {type: Schema.Types.ObjectId, ref:'Offer'}
})

const Sector = model('Sector', schema);


module.exports = Sector;