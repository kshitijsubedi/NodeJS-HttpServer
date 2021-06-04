var http = require("http");
var fs = require("fs");

const port = 8888;

const requestHandler = (req, res) => {
    fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
};

http.createServer(requestHandler).listen(port, () => {
    console.log(`Server Starting at localhost:${port} 😁`);
});
