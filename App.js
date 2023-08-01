

const Express = require('express')

const App = Express()

App.use((res, req, next) => {

    next()
})

App.use((res, req, next) => {
    req.send("<h1>Hello from Express</h1>")
})



App.listen(3000);
