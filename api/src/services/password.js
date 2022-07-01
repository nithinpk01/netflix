const cryptoJS = require("crypto-js");

function encrypt(password) {
    return cryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
}

function decrypt(password) {
    const bytes = cryptoJS.AES.decrypt(password, process.env.SECRET_KEY);
    return bytes.toString(cryptoJS.enc.Utf8);
}

module.exports = {
    encrypt,
    decrypt
};