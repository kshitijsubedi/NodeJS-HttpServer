const express = require("express");
const router = require("./routes");
const errorHandler = require("./middlewares/error.js");
const serveHtml = require("./utils/serverHtml");

const port = 8888;

const app = express();
app.use(express.json());

app.use("/", serveHtml);
app.use("/user", router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Express Server Starting at localhost:${port} 😁`);
});
