const fs=require('fs')

fs.writeFile('greeting.txt',"hello-world",function(err){
    if(err) throw err

    console.log("file written")

})

fs.writeFile('greeting.txt',"Hello Aryan",function(err){
    if(err) throw err

    console.log("greeted")
})