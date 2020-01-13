const express = require('express')

const userRouter = require('router')
const config = require('./config/config')

const app = express()
const port = config.PORT

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is on port ' + port)
})