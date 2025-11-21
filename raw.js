require("dotenv").config()

const http = require('http');
// const {methods} = require("express/lib/utils.js");
const server = http.createServer((req, res)=> {
   //req :incoming request(method,url, headers)
    //res: outgoing response (write, end)
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello from Raw Node.js');
    }
        else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found : (');
    }
});
const port =3000
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
