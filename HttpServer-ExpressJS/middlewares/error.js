function errorHandler(error, req, res, next) {
    console.log(error);
    res.send({ error: "Oops Something is wrong ! 😅" });
}

module.exports = errorHandler;
