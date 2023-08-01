const Express = require('express')

const Router = Express.Router()
Router.get('/product', (req, res, next) => {
    res.send(`<h1>Hello from Add To Card</h1><br> 
        <form action="admin/product" Method="Post" ><input type="text" name="title"></input> 
        <input type="number" name="number"/><button type=submit>Add To Cart</button></form>`)

})

Router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})


module.exports = Router