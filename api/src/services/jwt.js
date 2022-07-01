const jwt = require('jsonwebtoken');

function createToken(data){
    return jwt.sign(data,process.env.SECRET_KEY,{ expiresIn: "1d" })
}
module.exports = {createToken};