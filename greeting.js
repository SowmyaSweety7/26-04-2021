var http=require("http")
var fs=require("fs")
var server=http.createServer(function(req,res){
        fs.readFile("Text.txt",function(err,data){
            res.write(data)
            res.end();
})
})
server.listen(2000)
console.log("Server Started.....")
