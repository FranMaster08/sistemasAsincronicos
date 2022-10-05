const { Router } = require('express')
const routes = Router()
const user = require('./users')

routes.get('/' , (req, res) => {
    res.json({ msg: 'Hello'})
})
routes.use('/user' , user)

module.exports = routes