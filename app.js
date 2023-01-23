const express = require("express")
const app = express()
const path = require('path')

const PORT = process.env.PORT || 8080

app.get('/', function(req,res){ 
    res.sendFile(path.join(__dirname+'/views/index.html'))
})

const server = app.listen(PORT,function(){ 
    console.log('сервер пашет дебил порт для тебя гения:' + server.address().port)
})