const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send("I am running to server port ")
})

app.listen(8000)