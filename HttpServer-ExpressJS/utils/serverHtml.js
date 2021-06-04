const path = require("path");

let serveHtml = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "static", "/index.html"));
};
module.exports = serveHtml;
