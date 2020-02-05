let http = require('http');

let myApp = http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.end("Welcome");
});

myApp.listen(3000);