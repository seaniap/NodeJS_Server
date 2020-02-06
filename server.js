let http = require('http');
let fs = require('fs');
let url = require('url');

let myApp = http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    console.log(q.pathname);
    let filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });
            return res.end("404 Not Found");
        }
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(data);
        return res.end();
    })
});

myApp.listen(3000);

console.log("Server listening 3000....")