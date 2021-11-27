const jwt = require('./jwt')

module.exports.isAuthorized = (redirect_uri) => {
    function handle(res, code, msg) {
        if (redirect_uri == undefined) res.status(code).send({ message: msg })
        else res.redirect(redirect_uri)
    }

    return (req, res, next) => {
        var token = req.cookies['token']
        if (token == undefined) {
            handle(res, '403', 'Foribidden')
            return
        }

        jwt.verify(token)
            .then((data) => {
                req.jwtData = data
                next()
                return
            })
            .catch((err) => {
                handle(res, '403', 'Forbidden')
                return
            })
    }
}