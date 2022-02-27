const jwt = require('jsonwebtoken');
const Offer = require('../models/Offer');

module.exports = async(req, res, next) => {
    const {authorization} = req.query;
    Offer.user = req.user._id;
    const {user} = jwt.verify(authorization, 'secreto');
    req.user = user;
    next();
}