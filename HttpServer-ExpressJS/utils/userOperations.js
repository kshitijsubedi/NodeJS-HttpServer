const fs = require("fs");
const path = require("path");

const jsonFile = path.join(__dirname, "..", "userData.json");

const existingUser = (username) => {
    let rawdata = fs.readFileSync(jsonFile);
    let data = JSON.parse(rawdata);
    return data.find((dt) => dt.username == username);
};
const storeUser = (username, password) => {
    let rawdata = fs.readFileSync(jsonFile);
    let data = JSON.parse(rawdata);
    let newData = { username: username, password: password };
    data.push(newData);
    fs.writeFileSync(jsonFile, JSON.stringify(data));
};

module.exports = { existingUser, storeUser };
