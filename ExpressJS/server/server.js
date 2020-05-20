const express=require('express')

const server =express() //creates a new server when express() is called

server.get('/',function(req,res,next){
    //Middlewares (functions)
    console.log("Hello")
    res.send("Hello Aryan")
})

server.listen(2121,()=>{
    console.log("Server started at http://localhost:2121/")
})

server.get('/greet/:name',function(req,res,next){
    let greeting="GoodMorning , "+req.params.name
    res.send(greeting)
})



server.get('/greet/:tod/:name',function(req,res,next){
    let tod
    switch(req.param.tod){
        case 'morning' : tod="Morning"; break;
        case 'evening' : tod="Evening"; break;
    }

    let greeting ="Good "+ req.params.tod+" ,"+req.params.name

    res.send(greeting)
})

server.listen(3400)