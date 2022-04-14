const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode ? req.StatusCode : 500

    res.status(statusCode)

    res.json({
        error: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}