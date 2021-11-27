const express = require('express')
const cookie = require('cookie-parser')

const config = require('./config')

const app = express()

const apiRoutes = require('./auth/routes')
const webRoutes = require('./web/routes')

app.use(cookie())

apiRoutes(app)
webRoutes(app)

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`))