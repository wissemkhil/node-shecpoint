var http= require("http")
http.createServer(function(request,response){

response.writeHead(500,{'content-type':'text/plain'});
response.end('<h1>HELLO NODE!!!!!!!!!!!/n</h1>');





}).listen(3000);
console.log('serveur running at http://localhost:3000/');