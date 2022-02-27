const {model, Schema} = require('mongoose');

const schema = new Schema({
    name : String,
    salary : Number,
    workday: String,
    agreement: String,
    user: {type: Schema.Types.ObjectId, ref:'User'}
    
})
const Offer = model('Offer', schema);
module.exports = Offer;