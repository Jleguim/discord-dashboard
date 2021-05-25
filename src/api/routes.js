const json = require('body-parser').json
const controller = require('./controller')

module.exports = (app) => {
    app.use('/api/', json())

    app.get('/api/', (req, res) => {
        res.send('Hello world api!')
    })

    app.get('/api/login', controller.login)
}