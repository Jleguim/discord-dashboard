const { isAuthorized } = require('../auth/JWT/middleware')

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('Hello world!')
    })

    app.get('/test', isAuthorized('/'), (req, res) => {
        res.send('Test')
    })

}