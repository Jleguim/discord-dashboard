const { isAuthorized } = require('../api/middleware')

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('Hello world!')
    })

    app.get('/test', isAuthorized('/'), (req, res) => {
        res.send('Test')
    })

}