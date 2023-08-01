

const Express = require('express')
const Bodyparser = require('body-parser')

const App = Express()

App.use(Bodyparser.urlencoded({ extended: false }))

App.use('/add', (req, res, next) => {
    res.send(`<h1>Hello from Add To Card</h1><br> 
    <form action="/product" Method="Post" ><input type="text" name="title"></input> 
    <input type="number" name="number"/><button type=submit>Add To Cart</button></form>`)

})

App.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

App.use("/", (req, res, next) => {
    res.send("<h1>Hello from Express</h1>")
})



App.listen(3000);
