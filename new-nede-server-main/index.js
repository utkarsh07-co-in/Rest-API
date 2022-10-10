const http=require("http");
const port=8080;


const server = http.createServer(function(req,res){
   if (req.url.startsWith("/winters")){
        req.end("Wear your clothes")
}
else if(req.url.startsWith("/summers")){
   res.writeHead(404,{
      "context-type":"text/plain"
   })
   res.write("Eat Icecream")
}
     res.end()
})
server.listen(port,()=>{
  console.log("server started on ",port)
});