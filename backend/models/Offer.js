const {model, Schema} = require('mongoose');

const schema = new Schema({
    name : String,
    salary : Number,
    workday: String,
    agreement: String,
    corporate: {type: Schema.Types.ObjectId, ref:'Corporate'},
    candidates: [{type: Schema.Types.ObjectId, ref:'Candidate'}],
    requirements: [{
        type: Schema.Types.ObjectId,
        required: true,
        enum: ['Titulation', 'Experience']
      }],
    recommendeds: [{type: Schema.Types.ObjectId, ref:'Recommended'}]
    
})
const Offer = model('Offer', schema);
module.exports = Offer;