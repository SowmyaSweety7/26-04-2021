var http=require("http")
var mod=require("./module")
var server=http.createServer(function(req,res){
    res.write("The Current date and time : "+mod.dateAndTime())
    res.end();
})
server.listen(7000)
console.log("Server Started.....")
