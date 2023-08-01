const Express = require('express')

const Router = Express.Router();

Router.get("/", (req, res, next) => {
    res.send("<h1>Hello from Express</h1>")
})


module.exports = Router