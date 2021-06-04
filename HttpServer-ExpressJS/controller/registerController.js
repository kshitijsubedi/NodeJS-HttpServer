const { hashPass } = require("../utils/bcrypt");
const { existingUser, storeUser } = require("../utils/userOperations.js");

const registerController = (req, res, next) => {
    const { username, password } = req.body;
    if (existingUser(username)) {
        return res.status(400).send("Username already Exists!");
    } else {
        let hashedPass = hashPass(password);
        storeUser(username, hashedPass);
        return res.status(200).send("Successfully Registered!");
    }
};

module.exports = registerController;
