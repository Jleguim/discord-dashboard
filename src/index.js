const express = require('express')
const config = require('./config')

const app = express()

const apiRoutes = require('./api/routes')
const webRoutes = require('./web/routes')

apiRoutes(app)
webRoutes(app)

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`))