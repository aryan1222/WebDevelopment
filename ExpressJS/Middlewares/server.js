
const express=require ('express')

const server =express()

const m1= function(req,res,next){
    console.log("Middleware1")
    next()
}

const m2=function(req,res,next){
    console.log("Middleware2")
    next()
}

const m3= function(req,res,next){
    console.log("Middleware3")
    next()
}

server.use(m1)
server.use('/a',m2)
server.get('/a',function(req,res,next){
    res.send("<h1>Hello</h1>")
})
server.use(m3)

server.listen(2121)