const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    console.log(req.query)
    const {authorization} = req.headers;

    const {user} = jwt.verify(authorization, 'zekreto');
    req.user = user;
    next();
}