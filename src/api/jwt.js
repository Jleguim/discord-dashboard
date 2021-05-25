const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

module.exports.authenticate = (data) => {
    return new Promise((rsl, rjc) => {
        if (data == undefined) return rjc("Argument 'data' not defined.")

        jwt.sign(data, JWT_SECRET, { expiresIn: '30s' }, (err, token) => {
            if (err) return rjc(err)
            if (token == undefined) return rjc("Unknown error.")

            rsl(token)
        })
    })
}

module.exports.verify = (token) => {
    return new Promise((rsl, rjc) => {
        if (token == undefined) return rjc("Argument 'token' not defined.")

        jwt.verify(token, JWT_SECRET, (err, data) => {
            if (err) return rjc(err)
            if (data == undefined) return rjc("Unknown error.")

            rsl(data)
        })
    })
}