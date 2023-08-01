

const Express = require('express')
const Bodyparser = require('body-parser')

const AdminRouter = require("./routes/Admin")
const ShopRouter = require("./routes/Shop")

const App = Express()

App.use(Bodyparser.urlencoded({ extended: false }))

App.use("/admin",AdminRouter)
App.use(ShopRouter)

App.use((res, req, next) => {
    req.status(404).send("<h1>Page not found</h1>")
})



App.listen(3000);
