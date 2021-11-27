require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    auth: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        scope: ['identify'],
        redirect_uri: encodeURI('http://localhost:1337/auth/discord_callback')
    }
}