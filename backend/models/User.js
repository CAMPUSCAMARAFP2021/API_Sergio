const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    passwd: String,
    email: String,
    offers: [{type: Schema.Types.ObjectId, ref:'offers'}]
})

const User = model('User', schema);


module.exports = User;