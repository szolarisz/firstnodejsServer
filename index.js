const http = require('http');
const port = 4444;
const fs = require('fs');

const server = http.createServer( (req,res) =>{
   
    console.log(req.url);
    console.log(req.method);
    
    
    //router
    switch (true){
        case req.url === '/' && req.method === 'GET':
            fs.readFile('./views/index.html', (err,file) =>{
                res.setHeader('Content-Type', 'text/html');
                res.end(file);
            });
            break;
            case req.url === '/minta.css' && req.method === 'GET':
                fs.readFile('./views/minta2.css', (err,file) =>{
                    res.setHeader('Content-Type', 'text/css');
                    res.end(file);
                });
                break;    
        default:
            fs.readFile('./views/hiba404.html', (err,file) =>{
                res.setHeader('Content-Type', 'text/html');
                res.end(file);
            });
            //Majd ezt is kuldom állományból    
    }
})



server.listen(port);