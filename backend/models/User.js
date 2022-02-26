const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    password: String,
    email: String,
    achievements: {type: Schema.Types.ObjectId, ref:'Achieve'}
})

const User = model('User', schema);


module.exports = User;