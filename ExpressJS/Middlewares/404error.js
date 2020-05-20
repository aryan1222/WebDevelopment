const express=require('express')

const server=express()
server.get('/a',(req,res)=> res.send("HEllo"))

server.use((req,res)=> res.send("<h1>404 Not Found</h1>"))
server.listen(4040)