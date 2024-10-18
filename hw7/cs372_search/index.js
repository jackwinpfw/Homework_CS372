const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
const port = 7703

function handler(req, res) {
    let filePath = "";
    if (req.url === '/' || req.url === '/index.js') {
        filePath = path.resolve("./cs372search.html")
    }
    else {
        filePath = path.resolve('.' + req.url)
    }

    let fileExt = path.extname(filePath)
    let type = ""
    
    if (!fs.existsSync(filePath)) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write("404 Not found.")
        res.end()
        return;
    }

    switch (fileExt) {
        case '.png':
            type = 'image/png'
            break;
        case '.html':
            type = 'text/html'
            break;
        default:
            type = 'text/plain'
            break;
    }

    res.writeHead(200, {'Content-Type': type});
    fs.createReadStream(filePath).pipe(res);
}

server.on('request', handler)
server.listen(port)