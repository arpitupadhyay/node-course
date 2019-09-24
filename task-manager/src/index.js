const express = require('express')
// const cookie = require('cookie')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.post('/users',(req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch(() => {
      
    })
})

app.listen(port, () => {
    console.log('Server is on port ' + port)
})