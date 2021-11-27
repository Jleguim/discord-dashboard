const jwt = require('./jwt')

module.exports.login = (req, res) => {
    if (Object.keys(req.body).length == 0) {
        res.status('400').send({ message: 'Bad Request' })
        return
    }

    const { username, password } = req.body

    if (username | password == undefined) {
        res.status('400').send({ message: 'Bad Request' })
        return
    }

    if (password != '1234') {
        res.status('403').send({ message: 'Forbidden' })
        return
    }

    jwt.authenticate({username})
        .then(token => {
            res.cookie('token', token)
            res.status('200').send({ message: 'Authenticated!' })
        })
        .catch(err => { // Error logging into a db?
            res.status('500').send({ message: 'Internal Server Error' })
            return
        })

}