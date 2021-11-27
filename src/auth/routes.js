const json = require('body-parser').json

const jwt = require('./JWT/controller')
const discord = require('./DiscordOauth2/controller')

module.exports = (app) => {
    app.use('/auth/', json())

    app.get('/auth/jwt', jwt.login)

    app.get('/auth/discord', (req, res) => res.redirect(discord.auth_uri))
    app.get('/auth/discord_callback', discord.callback)
}