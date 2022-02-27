const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    console.log(req.query)
    const {authorization} = req.body;

    const {user} = jwt.verify(authorization, 'zekreto');
    req.user = user;
    next();
}