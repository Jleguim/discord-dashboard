const { client_id, client_secret, redirect_uri, scope } = require('../../config').auth
const scopes = scope.join('%20')
const needle = require('needle')

module.exports.auth_uri = `https://discord.com/oauth2/authorize?response_type=code&prompt=consent&client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}` //state=

module.exports.callback = (req, res) => {
    if (!req.query.code) {
        res.status('400').send({ message: 'Bad Request' })
        return
    }

    needle.post('https://discord.com/api/oauth2/token',
        {
            client_id,
            client_secret,
            redirect_uri: redirect,
            grant_type: 'authorization_code',
            code: req.query.code
        }, (err, res, body) => {
            console.log(err)
            if (!err && res.statusCode == 200)
                console.log(res.body)
        })
}