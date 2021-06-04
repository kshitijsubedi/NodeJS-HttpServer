const bcrypt = require("bcryptjs");

let hashPass = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
};

let compareHash = (password, hashedPass) => {
    return bcrypt.compareSync(password, hashedPass);
};

module.exports = { hashPass, compareHash };
