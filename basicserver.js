let http = require("http")
let fs =require("fs")


http.createServer(function(req,res){

    console.log("request...."+req.url)
    if(req.url == "/login"){
        let loginfile = fs.readFileSync("login.html")
        res.writeHead(200,{"content-type":"text/html"})
        res.write(loginfile)
       // res.write("login");

    }else if(req.url == "/home"){
        res.write("home")
    }
   // res.write("hi");
    res.end();
}).listen(9898)