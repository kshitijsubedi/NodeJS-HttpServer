const { compareHash } = require("../utils/bcrypt");
const { existingUser } = require("../utils/userOperations");

const loginController = (req, res, next) => {
    const { username, password } = req.body;
    let found = existingUser(username);
    if (!found || !compareHash(password, found.password)) {
        return res.status(400).send("Username or Password Incorrect 😅");
    } else {
        return res.status(200).send("Login Success!");
    }
};

module.exports = loginController;
